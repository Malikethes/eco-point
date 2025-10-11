<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo/Header -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-4">♻️</div>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">QR Recycle</h1>
        <p class="text-gray-600">Sign in to your account</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-2xl shadow-2xl p-8">
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input 
              type="email" 
              placeholder="your@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="rounded text-indigo-600 focus:ring-indigo-500">
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" class="text-sm text-indigo-600 hover:text-indigo-700">
              Forgot password?
            </a>
          </div>

          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <button class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <span class="text-xl mr-2">🔍</span>
              <span class="text-sm font-medium">Google</span>
            </button>
            <button class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <span class="text-xl mr-2">👍</span>
              <span class="text-sm font-medium">Facebook</span>
            </button>
          </div>
        </div>

        <p class="mt-8 text-center text-sm text-gray-600">
          Don't have an account? 
          <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-700">
            Sign up
          </a>
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

      <!-- Additional Info -->
      <div class="mt-8 text-center text-sm text-gray-600">
        <p>By signing in, you agree to our</p>
        <p>
          <a href="#" class="text-indigo-600 hover:underline">Terms of Service</a> 
          and 
          <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
</script>
