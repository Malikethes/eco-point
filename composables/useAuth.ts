import { ref } from 'vue';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import type { User, Auth } from 'firebase/auth';

const user = ref<User | null>(null);
let initialized = false;

export default function useAuth() {
  const nuxt = useNuxtApp();
  const auth = nuxt.$firebaseAuth as Auth;

  onMounted(() => {
    if (import.meta.client && auth && !initialized) {
      initialized = true;
      onAuthStateChanged(auth, (u) => { user.value = u; });
    }
  });

  const ensureAuth = () => {
    if (import.meta.client || !auth) throw new Error('auth-not-ready');
    return auth;
  };


  const login = (email: string, password: string) => signInWithEmailAndPassword(ensureAuth(), email, password);
  const register = (email: string, password: string) => createUserWithEmailAndPassword(ensureAuth(), email, password);
  const logout = async () => {
    if (!auth) return;
    await signOut(auth);
    user.value = null;
  };

  return { user, login, register, logout };
}