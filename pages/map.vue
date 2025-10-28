<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import type { Location } from '~/types/location';

const locations = ref<Location[]>([]);
const loading = ref(true);

onMounted(async () => {
  const nuxt = useNuxtApp();
  const db = nuxt.$firebaseDb;
  
  if (db) {
    try {
      const locationsRef = collection(db, 'locations');
      const snapshot = await getDocs(locationsRef);
      locations.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Location));
    } catch (e) {
      console.error('Failed to load locations:', e);
    } finally {
      loading.value = false;
    }
  }
});
</script>

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
        <!-- Map -->
        <div class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <ClientOnly>
              <div class="h-[600px]">
                <LocationsMap v-if="!loading" :locations="locations" />
                <div v-else class="h-full flex items-center justify-center">
                  <p class="text-gray-500 dark:text-gray-400">Loading map...</p>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>

        <!-- Points List -->
        <div class="space-y-4">
          <div v-if="loading" class="text-center py-8">
            <p class="text-gray-500 dark:text-gray-400">Loading locations...</p>
          </div>
          
          <div 
            v-for="loc in locations" 
            :key="loc.id"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-green-500"
          >
            <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">
              {{ loc.name || 'Recycling Point' }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {{ loc.address || 'No address provided'}}
            </p>
            <div v-if="loc.materials && loc.materials.length > 0" class="flex flex-wrap gap-2 mb-3">
              <span 
                v-for="material in loc.materials" 
                :key="material"
                class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
              >
                {{ material }}
              </span>
            </div>
          </div>

          <!-- Fallback example locations if DB is empty -->
          <template v-if="!loading && locations.length === 0">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-green-500">
              <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">{{ $t('map.point1') }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{{ $t('map.address1') }}</p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">{{ $t('map.plastic') }}</span>
                <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">{{ $t('map.glass') }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>