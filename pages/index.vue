<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
    <div class="container mx-auto px-4 py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <img src="assets/images/Logo_ecopoint_fully_transparent.png" alt="Ecopoint logo" class="mx-auto w-48 h-auto">
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {{ $t('home.subtitle') }}
        </p>
        <div class="flex gap-4 justify-center">
          <NuxtLink 
            to="/map" 
            class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            {{ $t('home.findPoint') }}
          </NuxtLink>
          <NuxtLink 
            to="/#about" 
            class="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            {{ $t('home.learnMore') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Features Section -->
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">🗺️</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.pointsMap') }}</h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t('home.pointsMapDesc') }}
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.qrScanning') }}</h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t('home.qrScanningDesc') }}
          </p>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition">
          <div class="text-4xl mb-4">🌱</div>
          <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.ecoStats') }}</h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t('home.ecoStatsDesc') }}
          </p>
        </div>
      </div>
      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-700 my-16"/>

      <!-- About Section -->
      <section id="about" class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('about.title') }}</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ $t('about.subtitle') }}
          </p>
        </div>

        <!-- Mission -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span class="text-4xl mr-3">🎯</span>
            {{ $t('about.mission') }}
          </h3>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {{ $t('about.missionText') }}
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div class="flex items-start">
              <span class="text-3xl mr-4">♻️</span>
              <div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('about.ecoFriendly') }}</h4>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('about.ecoFriendlyDesc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div class="flex items-start">
              <span class="text-3xl mr-4">🗺️</span>
              <div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('about.convenience') }}</h4>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('about.convenienceDesc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div class="flex items-start">
              <span class="text-3xl mr-4">📊</span>
              <div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('about.transparency') }}</h4>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('about.transparencyDesc') }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div class="flex items-start">
              <span class="text-3xl mr-4">🤝</span>
              <div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('about.community') }}</h4>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('about.communityDesc') }}
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
            {{ $t('about.getStarted') }} →
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
