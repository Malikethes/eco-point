<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('map.title') }}</h1>
        <p class="text-gray-600 dark:text-gray-300">{{ $t('map.subtitle') }}</p>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <div class="grid md:grid-cols-3 gap-4">
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('map.searchByAddress') }}
            </label>
            <input 
              type="text" 
              :placeholder="$t('map.searchPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('map.materialType') }}
            </label>
            <select class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>{{ $t('map.allTypes') }}</option>
              <option>{{ $t('map.plastic') }}</option>
              <option>{{ $t('map.glass') }}</option>
              <option>{{ $t('map.paper') }}</option>
              <option>{{ $t('map.metal') }}</option>
              <option>{{ $t('map.electronics') }}</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Map Container and List -->
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Map Placeholder -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div class="h-[600px] bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <div class="text-center">
                <div class="text-6xl mb-4">🗺️</div>
                <p class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  {{ $t('map.interactiveMap') }}
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  {{ $t('map.mapPlaceholder') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Points List -->
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-green-500">
            <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">{{ $t('map.point1') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{{ $t('map.address1') }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">{{ $t('map.plastic') }}</span>
              <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">{{ $t('map.glass') }}</span>
              <span class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">{{ $t('map.paper') }}</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">📍 {{ $t('map.kmAway', { distance: '0.5' }) }}</p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-blue-500">
            <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">{{ $t('map.point2') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{{ $t('map.address2') }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">{{ $t('map.plastic') }}</span>
              <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">{{ $t('map.electronics') }}</span>
              <span class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">{{ $t('map.batteries') }}</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">📍 {{ $t('map.kmAway', { distance: '1.2' }) }}</p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-yellow-500">
            <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">{{ $t('map.point3') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{{ $t('map.address3') }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">{{ $t('map.metal') }}</span>
              <span class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">{{ $t('map.paper') }}</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">📍 {{ $t('map.kmAway', { distance: '2.1' }) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
