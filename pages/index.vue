<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold text-gray-900 mb-4">
          QR Recycle 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            ♻️
          </span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Scan QR codes and find the nearest recycling points. 
          Together we make the world cleaner!
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink 
            to="/map" 
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Find Recycling Point
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>

      <!-- Features Section -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">�</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">Points Map</h3>
          <p class="text-gray-600">
            Find the nearest recycling collection point on an interactive map
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">QR Scanning</h3>
          <p class="text-gray-600">
            Scan QR codes on packaging to get recycling information
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">🌱</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900">Eco-statistics</h3>
          <p class="text-gray-600">
            Отслеживайте свой вклад в защиту окружающей среды
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
