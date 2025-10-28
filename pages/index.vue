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

      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-700 my-16"/>

      <!-- About Section -->
      <section id="about" class="max-w-5xl mx-auto mb-16">
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
      </section>

      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-700 my-16"/>

      <!-- How It Works Section -->
      <div class="mb-16">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ $t('home.howItWorks') }}</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300">{{ $t('home.howItWorksSubtitle') }}</p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Step 1 -->
            <div class="text-center">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ $t('home.step1Title') }}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ $t('home.step1Desc') }}</p>
              <div class="flex flex-col gap-2">
                <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  {{ $t('home.step1Download') }} →
                </a>
                <NuxtLink to="/signup" class="text-green-600 dark:text-green-400 hover:underline font-semibold">
                  {{ $t('home.step1SignUp') }} →
                </NuxtLink>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="text-center">
              <div class="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ $t('home.step2Title') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ $t('home.step2Desc') }}</p>
              <div class="text-4xl mt-4">📱</div>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
              <div class="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ $t('home.step3Title') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ $t('home.step3Desc') }}</p>
              <div class="text-4xl mt-4">♻️</div>
            </div>

            <!-- Step 4 -->
            <div class="text-center">
              <div class="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ $t('home.step4Title') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ $t('home.step4Desc') }}</p>
              <div class="text-4xl mt-4">⭐</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-700 my-16"/>

      <!-- Current Features Section -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ $t('home.currentFeatures') }}</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">{{ $t('home.currentFeaturesSubtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition border-2 border-green-500">
            <div class="text-4xl mb-4">🗺️</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.binMap') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('home.binMapDesc') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition border-2 border-green-500">
            <div class="text-4xl mb-4">🏆</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.ranking') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('home.rankingDesc') }}
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition border-2 border-green-500">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.userStats') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('home.userStatsDesc') }}
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition border-2 border-green-500">
            <div class="text-4xl mb-4">🎁</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.rewards') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('home.rewardsDesc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-300 dark:border-gray-700 my-16"/>

      <!-- Future Features Section -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ $t('home.futureFeatures') }}</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">{{ $t('home.futureFeaturesSubtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-8 hover:shadow-2xl transition border-2 border-dashed border-gray-300 dark:border-gray-600 opacity-75">
            <div class="text-4xl mb-4">🔍</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.recognition') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('home.recognitionDesc') }}
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-8 hover:shadow-2xl transition border-2 border-dashed border-gray-300 dark:border-gray-600 opacity-75">
            <div class="text-4xl mb-4">📦</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.wasteTracking') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('home.wasteTrackingDesc') }}
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-8 hover:shadow-2xl transition border-2 border-dashed border-gray-300 dark:border-gray-600 opacity-75">
            <div class="text-4xl mb-4">🌍</div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ $t('home.globalStats') }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t('home.globalStatsDesc') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
html {
  scroll-behavior: smooth;
}
</style>