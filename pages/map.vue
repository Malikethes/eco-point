<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import type { Location } from '~/types/location';

const { t } = useI18n();

const locations = ref<Location[]>([]);
const loading = ref(true);
const selectedMaterial = ref<string>('allTypes');
const searchQuery = ref('');

const getMaterialTranslation = (material: string) => {
  const materialKey = material.toLowerCase();
  return t(`map.${materialKey}`);
};

const filteredLocations = computed(() => {
  let filtered = locations.value;

  // Filter by material
  if (selectedMaterial.value && selectedMaterial.value !== 'allTypes') {
    filtered = filtered.filter(loc =>
      loc.materials?.some(m => m.toLowerCase() === selectedMaterial.value.toLowerCase())
    );
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(loc =>
      loc.name?.toLowerCase().includes(query) ||
      loc.address?.toLowerCase().includes(query)
    );
  }

  return filtered;
});

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
              v-model="searchQuery"
              type="text" 
              :placeholder="$t('map.searchPlaceholder')"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {{ $t('map.materialType') }}
            </label>
            <select 
              v-model="selectedMaterial"
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="allTypes">{{ $t('map.allTypes') }}</option>
              <option value="plastic">{{ $t('map.plastic') }}</option>
              <option value="glass">{{ $t('map.glass') }}</option>
              <option value="paper">{{ $t('map.paper') }}</option>
              <option value="metal">{{ $t('map.metal') }}</option>
              <option value="electronics">{{ $t('map.electronics') }}</option>
              <option value="batteries">{{ $t('map.batteries') }}</option>
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
                <LocationsMap 
                  v-if="!loading && locations.length > 0" 
                  :locations="locations"
                  :selected-material="selectedMaterial"
                />
                <div v-else-if="loading" class="h-full flex items-center justify-center">
                  <p class="text-gray-500 dark:text-gray-400">Loading map...</p>
                </div>
                <div v-else class="h-full flex items-center justify-center">
                  <p class="text-gray-500 dark:text-gray-400">No locations found</p>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>

        <!-- Points List -->
        <div class="space-y-4 max-h-[600px] overflow-y-auto">
          <div v-if="loading" class="text-center py-8">
            <p class="text-gray-500 dark:text-gray-400">Loading locations...</p>
          </div>
          
          <div 
            v-for="loc in filteredLocations" 
            :key="loc.id"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-green-500"
          >
            <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-2">
              {{ loc.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-1">
              {{ loc.address}}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">
              {{ loc.latitude }}, {{ loc.longitude }}
            </p>
            <div v-if="loc.materials && loc.materials.length > 0" class="flex flex-wrap gap-2">
              <span 
                v-for="material in loc.materials" 
                :key="material"
                class="text-xs px-2 py-1 rounded"
                :class="{
                  'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200': material.toLowerCase() === 'plastic',
                  'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200': material.toLowerCase() === 'glass',
                  'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200': material.toLowerCase() === 'paper',
                  'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200': material.toLowerCase() === 'metal',
                  'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200': material.toLowerCase() === 'electronics',
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200': material.toLowerCase() === 'batteries',
                }"
              >
                {{ getMaterialTranslation(material) }}
              </span>
            </div>
          </div>

          <!-- No results message -->
          <div v-if="!loading && filteredLocations.length === 0" class="text-center py-8">
            <p class="text-gray-500 dark:text-gray-400">No locations match your filters</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>