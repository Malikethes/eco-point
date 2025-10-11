<template>
  <nav class="bg-white shadow-lg border-b border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition">
          <span class="text-3xl">♻️</span>
          <span class="text-xl font-bold text-gray-900">QR Recycle</span>
        </NuxtLink>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink 
            to="/" 
            class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/map" 
            class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition"
          >
            Map
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Login Button -->
        <NuxtLink 
          to="/login" 
          class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition transform hover:scale-105"
        >
          Sign In
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

