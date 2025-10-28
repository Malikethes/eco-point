<script setup lang="ts">
import { onMounted } from 'vue';
import { MapPin } from 'lucide-vue-next';
import LocationsMap from '~/components/LocationsMap.vue';

const { t } = useI18n();

const {
  locations,
  loading,
  selectedFilter,
  selectedLocation,
  wasteTypes,
  filteredLocations,
  fetchLocations,
  selectLocation,
  getStatusColor,
  getTypeColor
} = useLocations();

onMounted(() => {
  fetchLocations();
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-2">
          {{ $t('map.title') }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ $t('map.subtitle') }}
        </p>
      </div>

      <!-- Filters -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {{ $t('map.filterByType') }}
        </h2>
        <div class="flex flex-wrap gap-3">
          <button
            v-for="type in wasteTypes"
            :key="type"
            @click="selectedFilter = type"
            :class="[
              'px-6 py-2.5 rounded-lg font-medium transition-all duration-200',
              selectedFilter === type
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg hover:from-green-700 hover:to-blue-700'
                : 'border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-500 hover:bg-green-50 dark:hover:bg-gray-800'
            ]"
          >
            {{ $t(`map.${type.toLowerCase()}`) }}
          </button>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div class="mb-8 overflow-hidden rounded-2xl shadow-xl map-container">
        <div class="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-green-100 via-blue-100 to-green-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          <ClientOnly>
            <LocationsMap 
              v-if="!loading && locations.length > 0" 
              :locations="locations"
              :selected-location="selectedLocation"
              :selected-material="selectedFilter.toLowerCase()"
              class="h-full w-full"
            />
            <div v-else-if="loading" class="h-full flex items-center justify-center">
              <div class="text-center z-10">
                <div class="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mx-auto mb-4"></div>
                <p class="text-gray-600 dark:text-gray-300 font-medium">{{ $t('map.loading') }}</p>
              </div>
            </div>
            <div v-else class="h-full flex items-center justify-center">
              <div class="text-center z-10">
                <MapPin :size="64" class="text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {{ $t('map.interactiveMap') }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ $t('map.mapDescription') }}
                </p>
              </div>
            </div>
          </ClientOnly>
        </div>
      </div>

      <!-- Location List -->
      <div>
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
            {{ $t('map.nearbyEcoPoints') }} ({{ filteredLocations.length }})
          </h2>
        </div>

        <div v-if="loading" class="text-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p class="text-gray-500 dark:text-gray-400">{{ $t('map.loading') }}</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="point in filteredLocations"
            :key="point.id"
            @click="selectLocation(point)"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-300 dark:hover:border-green-600 overflow-hidden group cursor-pointer"
          >
            <div class="p-6">
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div class="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg">
                    <MapPin :size="24" class="text-white" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white">{{ point.name }}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">0.5 km {{ $t('map.away') }}</p>
                  </div>
                </div>
                <div :class="['w-3 h-3 rounded-full', getStatusColor()]"></div>
              </div>

              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">{{ point.address }}</p>

              <div class="mb-4">
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ $t('map.accepts') }}:</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="material in point.materials"
                    :key="material"
                    :class="['text-xs px-3 py-1 rounded-full border', getTypeColor(material)]"
                  >
                    {{ $t(`map.${material.toLowerCase()}`) }}
                  </span>
                </div>
              </div>

              <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span class="text-sm font-medium text-green-600 dark:text-green-400">
                  {{ $t('map.available') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!loading && filteredLocations.length === 0" class="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <p class="text-gray-500 dark:text-gray-400 text-lg">
            {{ $t('map.noResults') }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>