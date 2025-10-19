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
            to="/#about" 
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
            See your positive impact on the environment over time
          </p>
        </div>
      </div>
      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-700 my-16"/>

      <!-- About Section -->
      <section id="about" class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">About Us</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            EcoPoint is an innovative platform for simplifying the waste recycling process
          </p>
        </div>

        <!-- Mission -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span class="text-4xl mr-3">🎯</span>
            Our Mission
          </h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
            We strive to make waste recycling simple and accessible for everyone. 
            Our platform helps people find the nearest recycling points 
            and get information about proper disposal of various materials.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div class="flex items-start">
              <span class="text-3xl mr-4">♻️</span>
              <div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Eco-Friendly</h4>
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
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Convenience</h4>
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
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Transparency</h4>
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
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Community</h4>
                <p class="text-gray-600 dark:text-gray-300">
                  Join thousands of people who care about the environment
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <NuxtLink 
            to="/map" 
            class="inline-block bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get Started →
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
