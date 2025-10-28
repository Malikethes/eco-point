<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {{ $t('portal.title') }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {{ $t('portal.subtitle') }}
        </p>
      </div>

      <!-- Portal Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
        <!-- Employee Portal -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-2 border-gray-100 dark:border-gray-700 transition-all hover:shadow-2xl">
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Users :size="40" class="text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4 leading-tight">
            {{ $t('portal.employeePortal') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-center mb-8 leading-relaxed">
            {{ $t('portal.employeeDescription') }}
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <BarChart3 :size="20" class="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {{ $t('portal.employeeFeature1') }}
              </p>
            </div>
            <div class="flex items-start gap-3">
              <TrendingDown :size="20" class="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {{ $t('portal.employeeFeature2') }}
              </p>
            </div>
            <div class="flex items-start gap-3">
              <BarChart3 :size="20" class="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {{ $t('portal.employeeFeature3') }}
              </p>
            </div>
          </div>

          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg">
            {{ $t('portal.goToEmployeePortal') }}
          </button>
        </div>

        <!-- Business Portal -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-2 border-gray-100 dark:border-gray-700 transition-all hover:shadow-2xl">
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Building2 :size="40" class="text-green-600 dark:text-green-400" />
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4 leading-tight">
            {{ $t('portal.businessPortal') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-center mb-8 leading-relaxed">
            {{ $t('portal.businessDescription') }}
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <Gift :size="20" class="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {{ $t('portal.businessFeature1') }}
              </p>
            </div>
            <div class="flex items-start gap-3">
              <BarChart3 :size="20" class="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {{ $t('portal.businessFeature2') }}
              </p>
            </div>
            <div class="flex items-start gap-3">
              <TrendingUp :size="20" class="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {{ $t('portal.businessFeature3') }}
              </p>
            </div>
          </div>

          <button class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg">
            {{ $t('portal.goToBusinessPortal') }}
          </button>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 leading-tight">
          {{ $t('portal.ecosystemBenefits') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Ecology -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl">
            <div class="flex justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Leaf :size="32" class="text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {{ $t('portal.ecology') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {{ $t('portal.ecologyDescription') }}
            </p>
          </div>

          <!-- Social -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl">
            <div class="flex justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Users :size="32" class="text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {{ $t('portal.social') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {{ $t('portal.socialDescription') }}
            </p>
          </div>

          <!-- Economy -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl">
            <div class="flex justify-center mb-6">
              <div class="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <TrendingUp :size="32" class="text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {{ $t('portal.economy') }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {{ $t('portal.economyDescription') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Users, Building2, BarChart3, TrendingDown, TrendingUp, Gift, Leaf } from 'lucide-vue-next';

const { t } = useI18n();
</script>
