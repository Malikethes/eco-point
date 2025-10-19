import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  deleteUser,
  type Auth,
  type User
} from 'firebase/auth';
import {
  doc, setDoc, serverTimestamp, collection, query, where, getDocs
} from 'firebase/firestore';

export const useFirebaseStore = defineStore('firebase', () => {
  const nuxt = useNuxtApp();
  const auth = nuxt.$firebaseAuth as Auth | undefined;
  const db = nuxt.$firebaseDb;

  const user = ref<User | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  if (import.meta.client && auth) {
    onAuthStateChanged(auth, (u) => { user.value = u; });
  }

  const isLoggedIn = computed(() => !!user.value);
  const ensureAuth = (): Auth => {
    const a = (useNuxtApp().$firebaseAuth as Auth | undefined) ?? auth;
    if (!a) throw new Error('auth-not-ready');
    return a;
  };

  const signIn = async (email: string, password: string) => {
    loading.value = true; error.value = null;
    try {
      const cred = await signInWithEmailAndPassword(ensureAuth(), email, password);
      user.value = cred.user;
      return cred;
    } catch (e) {
      error.value = 'login-failed';
      throw e;
    } finally {
      loading.value = false;
    }
  };

  const signUp = async (opts: {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
    defaultAchievementId?: string;
  }) => {
    const { name, username, email, password, confirmPassword, defaultAchievementId } = opts;

    loading.value = true; error.value = null;
    const uname = username.trim().toLowerCase().replace(/^@/, '');

    if (confirmPassword !== undefined && password !== confirmPassword) {
      loading.value = false; error.value = 'passwords-do-not-match';
      throw new Error('passwords-do-not-match');
    }
    if (!/^[a-z0-9._-]{3,30}$/.test(uname)) {
      loading.value = false; error.value = 'invalid-username';
      throw new Error('invalid-username');
    }

    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', uname));

    let cred = null;
    try {
      // pre-check for existing username
      const pre = await getDocs(q);
      if (!pre.empty) {
        error.value = 'username-taken';
        throw new Error('username-taken');
      }

      cred = await createUserWithEmailAndPassword(ensureAuth(), email, password);
      user.value = cred.user;

      const post = await getDocs(q);
      if (!post.empty) {
        try {
          await deleteUser(cred.user);
        } catch (e) {
          console.warn('Failed to delete auth user after username conflict:', e);
        }
        user.value = null;
        error.value = 'username-taken';
        throw new Error('username-taken');
      }

      const profile = {
        name: name.trim(),
        username: uname,
        email: email.trim(),
        achievements: defaultAchievementId ? [doc(db, 'achievements', defaultAchievementId)] : [],
        currentMonthSessions: 0,
        pointsBalance: 0,
        pointsEarned: 0,
        totalSessions: 0,
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, 'users', cred.user.uid), profile);
      return cred;
    } finally {
      loading.value = false;
    }
  };

  const signOut = async () => {
    await fbSignOut(ensureAuth());
    user.value = null;
  };

  return { user, isLoggedIn, loading, error, signIn, signUp, signOut };
});