<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo/Header -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-4"><img src="assets/images/Logo_ecopoint_fully_transparent.png" alt="Ecopoint logo" class="mx-auto w-48 h-auto"></div>
        <p class="text-gray-600">Sign in to your account</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input 
              v-model="email"
              type="email" 
              placeholder="your@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input 
              v-model="password"
              type="password" 
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input v-model="remember" type="checkbox" class="rounded text-indigo-600 focus:ring-indigo-500">
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <NuxtLink to="#" class="text-sm text-indigo-600 hover:text-indigo-700">
              Forgot password?
            </NuxtLink>
          </div>

           <button 
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
            :disabled="loading"
          >
            <span v-if="!loading">Sign In</span>
            <span v-else>Signing in...</span>
          </button>

          <p v-if="error" class="text-sm text-red-600 mt-2">Wrong email or password, try again</p>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"/>
            </div>
          </div>
        </div>

        <p class="mt-8 text-center text-sm text-gray-600">
          Don't have an account? 
          <NuxtLink to="/signup" class="font-semibold text-indigo-600 hover:text-indigo-700">
            Sign up
          </NuxtLink>
        </p>
      </div>

      <!-- Back to Home -->
      <div class="mt-6 text-center">
        <NuxtLink 
          to="/" 
          class="text-gray-600 hover:text-gray-900 text-sm font-medium transition"
        >
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useAuth from '~/composables/useAuth';

definePageMeta({
  layout: 'auth'
});

const { login } = useAuth();
const email = ref('');
const password = ref('');
const remember = ref(false);
const loading = ref(false);
const error = ref('');

const onSubmit = async () => {
  loading.value = true;
  error.value = '';
  try {
    await login(email.value, password.value);
    // redirect after login
    return navigateTo('/');
  } catch (e) {
    console.error(e);
    // Friendly message
    error.value = e?.code ? e.code.replace('auth/', '').replace(/-/g, ' ') : 'Sign in failed';
  } finally {
    loading.value = false;
  }
};
</script>
