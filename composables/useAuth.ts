import { ref } from 'vue';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';

const user = ref<User | null>(null);
let initialized = false;

export default function useAuth() {
  const nuxt = useNuxtApp();
  const auth = nuxt.$firebaseAuth;

  if (!initialized) {
    initialized = true;
    onAuthStateChanged(auth, (u) => {
      user.value = u;
    });
  }

  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  const logout = async () => {
    await signOut(auth);
    user.value = null;
  };

  return { user, login, register, logout };
}