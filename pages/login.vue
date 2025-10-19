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
          </div>
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
import { useFirebaseStore } from '~/stores/firebaseStore';

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
</script>
