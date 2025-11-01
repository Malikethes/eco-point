<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 transition-colors">
    <div class="max-w-md w-full">
      <!-- Logo/Header -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-4"><img src="assets/images/Logo_ecopoint_fully_transparent.png" alt="Ecopoint logo" class="mx-auto w-48 h-auto"></div>
        <p class="text-gray-600 dark:text-gray-300">{{ $t('login.title') }}</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('login.email') }}
            </label>
            <input 
              v-model="email"
              type="email" 
              :placeholder="$t('login.emailPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('login.password') }}
            </label>
            <input 
              v-model="password"
              type="password" 
              :placeholder="$t('login.passwordPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input v-model="remember" type="checkbox" class="rounded text-indigo-600 focus:ring-indigo-500">
              <span class="ml-2 text-sm text-gray-600 dark:text-gray-300">{{ $t('login.rememberMe') }}</span>
            </label>
            <NuxtLink to="#" class="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
              {{ $t('login.forgotPassword') }}
            </NuxtLink>
          </div>

           <button 
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
            :disabled="loading"
          >
            <span v-if="!loading">{{ $t('login.signIn') }}</span>
            <span v-else>{{ $t('login.signingIn') }}</span>
          </button>

          <p v-if="error" class="text-sm text-red-600 dark:text-red-400 mt-2">{{ $t('login.error') }}</p>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300 dark:border-gray-600"/>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">{{ $t('login.orContinueWith') }}</span>
            </div>
          </div>

          <!-- Google Sign In Button -->
          <button
            @click="onGoogleSignIn"
            type="button"
            class="mt-4 w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg shadow transition transform hover:scale-105"
            :disabled="loading"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span v-if="!loading">{{ $t('login.signInWithGoogle') }}</span>
            <span v-else>{{ $t('login.signingIn') }}</span>
          </button>
        </div>

        <p class="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          {{ $t('login.noAccount') }} 
          <NuxtLink to="/signup" class="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
            {{ $t('login.signUp') }}
          </NuxtLink>
        </p>
      </div>

      <!-- Back to Home -->
      <div class="mt-6 text-center">
        <NuxtLink 
          to="/" 
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition"
        >
          {{ $t('login.backToHome') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFirebaseStore } from '~/stores/authStore';

definePageMeta({ layout: 'auth' });

const store = useFirebaseStore();
const email = ref('');
const password = ref('');
const remember = ref(false);
const loading = store.loading;
const error = ref('');

const onSubmit = async () => {
  error.value = '';
  try {
    await store.signIn(email.value, password.value);
    return navigateTo('/');
  } catch (e) {
    console.error(e);
    error.value = 'Sign in failed';
  }
};

const onGoogleSignIn = async () => {
  error.value = '';
  try {
    await store.signInWithGoogle();
    return navigateTo('/');
  } catch (e) {
    console.error(e);
    error.value = 'Google sign in failed';
  }
};
</script>
