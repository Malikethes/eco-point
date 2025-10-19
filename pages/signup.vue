<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo/Header -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-4"><img src="assets/images/Logo_ecopoint_fully_transparent.png" alt="Ecopoint logo" class="mx-auto w-48 h-auto"></div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Create your account</h1>
        <p class="text-gray-600">Sign up to join EcoPoint</p>
      </div>

      <!-- Signup Form -->
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Full name</label>
            <input 
              v-model="name"
              type="text"
              placeholder="Jane Doe"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input 
              v-model="username"
              type="text"
              placeholder="janedoe"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              v-model="email"
              type="email" 
              placeholder="you@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              v-model="password"
              type="password" 
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
              minlength="6"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Repeat password</label>
            <input 
              v-model="confirmPassword"
              type="password" 
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              required
              minlength="6"
            >
          </div>

          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
            :disabled="loading"
          >
            <span v-if="!loading">Sign Up</span>
            <span v-else>Creating account...</span>
          </button>

          <p v-if="error" class="text-sm text-red-600 mt-2">{{ error }}</p>
        </form>

        <p class="mt-8 text-center text-sm text-gray-600">
          Already have an account? 
          <NuxtLink to="/login" class="font-semibold text-indigo-600 hover:text-indigo-700">
            Sign in
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
import { useFirebaseStore } from '~/stores/firebaseStore';

definePageMeta({ layout: 'auth' });

const store = useFirebaseStore();

const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = store.loading;
const error = ref('');

const defaultAchievementId = 'Zs3eHtAdt9FAzinOf8qx';

const onSubmit = async () => {
  error.value = '';
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }
  try {
    await store.signUp({
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      defaultAchievementId
    });
    return navigateTo('/');
  } catch (e) {
    console.error('signup', e);
    switch (e.message){
      case 'username-taken':
        error.value = 'Username is already taken';
        break;
      case 'invalid-username':
        error.value = 'Username is invalid. Only lowercase letters, numbers, dots, underscores and hyphens are allowed (3-30 characters).';
        break;
      default:
        error.value = 'Sign up failed. Please try again.';
        break;
    }
  }
};
</script>
