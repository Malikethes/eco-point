<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 transition-colors">
    <div class="max-w-md w-full">
      <!-- Logo/Header -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-4"><img src="assets/images/Logo_ecopoint_fully_transparent.png" alt="Ecopoint logo" class="mx-auto w-48 h-auto"></div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('signup.title') }}</h1>
        <p class="text-gray-600 dark:text-gray-300">{{ $t('signup.subtitle') }}</p>
      </div>

      <!-- Signup Form -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('signup.fullName') }}</label>
            <input 
              v-model="name"
              type="text"
              :placeholder="$t('signup.fullNamePlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('signup.username') }}</label>
            <input 
              v-model="username"
              type="text"
              :placeholder="$t('signup.usernamePlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('signup.email') }}</label>
            <input 
              v-model="email"
              type="email" 
              :placeholder="$t('signup.emailPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('signup.password') }}</label>
            <input 
              v-model="password"
              type="password" 
              :placeholder="$t('signup.passwordPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
              minlength="6"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('signup.repeatPassword') }}</label>
            <input 
              v-model="confirmPassword"
              type="password" 
              :placeholder="$t('signup.passwordPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
              minlength="6"
            >
          </div>

          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
            :disabled="loading"
          >
            <span v-if="!loading">{{ $t('signup.signUpBtn') }}</span>
            <span v-else>{{ $t('signup.creatingAccount') }}</span>
          </button>

          <p v-if="error" class="text-sm text-red-600 dark:text-red-400 mt-2">{{ error }}</p>
        </form>

        <p class="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          {{ $t('signup.haveAccount') }} 
          <NuxtLink to="/login" class="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
            {{ $t('signup.signIn') }}
          </NuxtLink>
        </p>
      </div>

      <!-- Back to Home -->
      <div class="mt-6 text-center">
        <NuxtLink 
          to="/" 
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition"
        >
          {{ $t('signup.backToHome') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useAuth from '~/composables/useAuth';
import { doc, setDoc, serverTimestamp, collection, query, where, getDocs} from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';

definePageMeta({
  layout: 'auth'
});

const { register } = useAuth();
const nuxt = useNuxtApp();
const db = nuxt.$firebaseDb;
const { t } = useI18n();

const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref('');

const defaultAchievementId = 'Zs3eHtAdt9FAzinOf8qx';
const normalizeUsername = (raw) => raw.trim().toLowerCase().replace(/^@/, '');
const isValidUsername = (u) => /^[a-z0-9._-]{3,30}$/.test(u);

let cred = null;

const onSubmit = async () => {
  error.value = '';
  const uname = normalizeUsername(username.value);
  if (!isValidUsername(uname)) {
    error.value = t('signup.errors.invalidUsername');
    return;
  }
  if (password.value !== confirmPassword.value) {
    error.value = t('signup.errors.passwordMismatch');
    return;
  }
  loading.value = true;
  const storedUsername = uname;
  const usersRef = collection(db, 'users');
  const usernameQuery = query(usersRef, where('username', '==', storedUsername));

  try {
    const usernameSnap = await getDocs(usernameQuery);
    if (!usernameSnap.empty) {
      error.value = t('signup.errors.usernameTaken');
      loading.value = false;
      return;
    }
    
    cred = await register(email.value, password.value);
    const uid = cred.user.uid;

    const post = await getDocs(usernameQuery);
    if (!post.empty) {
      try { await deleteUser(cred.user); } catch (err) { console.warn('deleteUser failed', err); }
      await logout().catch(() => {});
      error.value = t('signup.errors.usernameTaken');
      return;
    }
    const achievementRef = doc(db, 'achievements', defaultAchievementId);
    await setDoc(doc(db, 'users', uid), {
      name: name.value.trim(),
      username: uname,
      email: email.value.trim(),
      achievements: [achievementRef],
      currentMonthSessions: 0,
      pointsBalance: 0,
      pointsEarned: 0,
      totalSessions: 0,
      createdAt: serverTimestamp()
    });

    return navigateTo('/');
  } catch (e) {
    console.error('signup error', e);
    error.value = e?.code ? e.code.replace('auth/', '').replace(/-/g, ' ') : t('signup.errors.signupFailed');

    if (cred?.user) {
      try { await deleteUser(cred.user); } catch (err) { console.warn('deleteUser failed', err); }
      await logout().catch(() => {});
    }
  } finally {
    loading.value = false;
  }
};
</script>
