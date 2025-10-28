<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center space-y-8 max-w-4xl mx-auto">
        <div class="inline-flex items-center justify-center p-4 mb-6">
          <img src="/assets/images/Logo_ecopoint_fully_transparent.png" alt="EcoPoint Logo" class="h-48 md:h-56 w-auto">
        </div>
        <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          {{ $t('home.heroTitle') }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('home.heroSubtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <NuxtLink 
            to="/map" 
            class="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition text-lg"
          >
            <MapPin :size="20" class="mr-2" />
            {{ $t('home.findEcoPoints') }}
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="inline-flex items-center justify-center border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition text-lg"
          >
            <Award :size="20" class="mr-2" />
            {{ $t('home.viewProfile') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-gray-800 transition-colors">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('home.howItWorks') }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">{{ $t('home.howItWorksSubtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <!-- Step 1 -->
        <div class="bg-white dark:bg-gray-700 border-2 border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-600 rounded-xl p-8 text-center space-y-4 transition-all hover:shadow-lg">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900">
            <QrCode :size="32" class="text-green-600 dark:text-green-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('home.step1Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ $t('home.step1Desc') }}</p>
        </div>

        <!-- Step 2 -->
        <div class="bg-white dark:bg-gray-700 border-2 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-600 rounded-xl p-8 text-center space-y-4 transition-all hover:shadow-lg">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900">
            <Trash2 :size="32" class="text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('home.step2Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ $t('home.step2Desc') }}</p>
        </div>

        <!-- Step 3 -->
        <div class="bg-white dark:bg-gray-700 border-2 border-green-100 dark:border-green-900 hover:border-green-300 dark:hover:border-green-600 rounded-xl p-8 text-center space-y-4 transition-all hover:shadow-lg">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900">
            <Coins :size="32" class="text-green-600 dark:text-green-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('home.step3Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ $t('home.step3Desc') }}</p>
        </div>

        <!-- Step 4 -->
        <div class="bg-white dark:bg-gray-700 border-2 border-blue-100 dark:border-blue-900 hover:border-blue-300 dark:hover:border-blue-600 rounded-xl p-8 text-center space-y-4 transition-all hover:shadow-lg">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900">
            <Gift :size="32" class="text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ $t('home.step4Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ $t('home.step4Desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Why EcoPoint Section -->
    <section id="about" class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{{ $t('home.whyEcoPoint') }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">{{ $t('home.whySubtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- For Residents -->
        <div class="bg-white/80 dark:bg-gray-700/80 backdrop-blur rounded-xl shadow-lg hover:shadow-xl p-8 space-y-4 transition-all">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600">
            <Users :size="28" class="text-white" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ $t('home.forResidents') }}</h3>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <Sparkles :size="20" class="text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.residentsFeature1') }}</span>
            </li>
            <li class="flex items-start">
              <Sparkles :size="20" class="text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.residentsFeature2') }}</span>
            </li>
            <li class="flex items-start">
              <Sparkles :size="20" class="text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.residentsFeature3') }}</span>
            </li>
            <li class="flex items-start">
              <Sparkles :size="20" class="text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.residentsFeature4') }}</span>
            </li>
          </ul>
        </div>

        <!-- For Businesses -->
        <div class="bg-white/80 dark:bg-gray-700/80 backdrop-blur rounded-xl shadow-lg hover:shadow-xl p-8 space-y-4 transition-all">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
            <Building2 :size="28" class="text-white" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ $t('home.forBusinesses') }}</h3>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <Sparkles :size="20" class="text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.businessFeature1') }}</span>
            </li>
            <li class="flex items-start">
              <Sparkles :size="20" class="text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.businessFeature2') }}</span>
            </li>
            <li class="flex items-start">
              <Sparkles :size="20" class="text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.businessFeature3') }}</span>
            </li>
            <li class="flex items-start">
              <Sparkles :size="20" class="text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
              <span>{{ $t('home.businessFeature4') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Smart City Impact -->
      <div class="mt-12 text-center">
        <div class="max-w-3xl mx-auto bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-xl p-8">
          <div class="flex justify-center mb-4">
            <TrendingUp :size="48" class="text-white" />
          </div>
          <h3 class="text-2xl font-bold mb-4">{{ $t('home.smartCityImpact') }}</h3>
          <p class="text-lg text-green-50">
            {{ $t('home.smartCityDesc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center overflow-hidden">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 dark:from-green-500/5 dark:via-blue-500/5 dark:to-purple-500/5"></div>
      
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-green-400/10 dark:bg-green-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div class="relative max-w-4xl mx-auto space-y-8">
        <!-- Icon -->
        <div class="flex justify-center mb-4">
          <div class="p-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full shadow-xl">
            <Sparkles :size="32" class="text-white" />
          </div>
        </div>
        
        <!-- Title -->
        <h2 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 leading-tight">
          {{ $t('home.ctaTitle') }}
        </h2>
        
        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {{ $t('home.ctaSubtitle') }}
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <NuxtLink 
            to="/signup" 
            class="group relative inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105 text-lg"
          >
            <Smartphone :size="20" class="mr-2" />
            {{ $t('home.getStarted') }}
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="group inline-flex items-center justify-center border-2 border-green-600 dark:border-green-500 bg-white/50 dark:bg-gray-800/50 backdrop-blur text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 text-lg"
          >
            {{ $t('home.learnMore') }}
            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { 
  MapPin, 
  Award, 
  QrCode, 
  Trash2, 
  Coins, 
  Gift, 
  Users, 
  Building2, 
  Sparkles, 
  TrendingUp,
  Smartphone 
} from 'lucide-vue-next'
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>