<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
    <div class="container mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          QR Recycle is an innovative platform for simplifying the waste recycling process
        </p>
      </div>

      <!-- Mission Section -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-8 max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span class="text-4xl mr-3">🎯</span>
          Our Mission
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
          We strive to make waste recycling simple and accessible for everyone. 
          Our platform helps people find the nearest recycling points 
          and get information about proper disposal of various materials.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div class="flex items-start">
            <span class="text-3xl mr-4">♻️</span>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Eco-Friendly</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Help reduce waste in landfills and contribute to 
                preserving natural resources
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div class="flex items-start">
            <span class="text-3xl mr-4">🗺️</span>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Convenience</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Interactive map with up-to-date information about recycling points 
                in your area
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div class="flex items-start">
            <span class="text-3xl mr-4">📊</span>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Transparency</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Complete information about accepted material types and operating hours
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div class="flex items-start">
            <span class="text-3xl mr-4">🤝</span>
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Community</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Join thousands of people who care about the environment
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <NuxtLink 
          to="/map" 
          class="inline-block bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Get Started →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
