import { ref } from 'vue';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import type { User, Auth } from 'firebase/auth';

const user = ref<User | null>(null);
let initialized = false;

export default function useAuth() {
  const nuxt = useNuxtApp();
  let auth = nuxt.$firebaseAuth as Auth | undefined;

  onMounted(() => {
    auth = (useNuxtApp().$firebaseAuth as Auth | undefined) ?? auth;
    if (initialized || !auth) return;
    initialized = true;
    onAuthStateChanged(auth, (u) => { user.value = u; });
  });

  const ensureAuth = () => {
    const a = (useNuxtApp().$firebaseAuth as Auth | undefined) ?? auth;
    if (!a) throw new Error('auth-not-ready');
    return a;
  };


  const login = (email: string, password: string) => signInWithEmailAndPassword(ensureAuth(), email, password);
  const register = (email: string, password: string) => createUserWithEmailAndPassword(ensureAuth(), email, password);
  const logout = async () => {
    const a = (useNuxtApp().$firebaseAuth as Auth | undefined) ?? auth;
    if (!a) return;
    await signOut(a);
    user.value = null;
  };

  return { user, login, register, logout };
}