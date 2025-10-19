<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
    <div class="container mx-auto px-4 py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <img src="assets/images/Logo_ecopoint_fully_transparent.png" alt="Ecopoint logo" class="mx-auto w-48 h-auto">
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Scan QR codes and find the nearest recycling points. 
          Together we make the world cleaner!
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink 
            to="/map" 
            class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Find Recycling Point
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>

      <!-- Features Section -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">🗺️</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Points Map</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Find the nearest recycling collection point on an interactive map
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">QR Scanning</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Scan QR codes on packaging to get recycling information
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">🌱</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Eco-statistics</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Отслеживайте свой вклад в защиту окружающей среды
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
