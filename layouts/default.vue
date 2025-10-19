<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-900 dark:bg-gray-950 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <span class="text-3xl"><img src="assets/images/Logo_ecopoint_fully_transparent_notext.png" alt="Ecopoint logo" class="mx-auto w-10 h-auto"></span>
              <span class="text-xl font-bold" style="color: #007337;">EcoPoint</span>
            </div>
            <p class="text-gray-400">
              Making waste collection simple and accessible for everyone.
            </p>
          </div>
          <div>
            <h3 class="font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-400 dark:text-gray-500">
              <li><NuxtLink to="/" class="hover:text-white transition">Home</NuxtLink></li>
              <li><NuxtLink to="/map" class="hover:text-white transition">Map</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white transition">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>📧 betterthannever.business@gmail.com</li>
              <li>📱 +48 123 456 789</li>
              <li>📍 Łódź </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EcoPoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
