import { ref, computed } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import type { Location } from '~/types/location';

export type WasteType = 'All' | 'Plastic' | 'Metal' | 'Paper' | 'Glass' | 'Mixed';

export const useLocations = () => {
  const locations = ref<Location[]>([]);
  const loading = ref(true);
  const selectedFilter = ref<WasteType>('All');
  const selectedLocation = ref<Location | null>(null);

  const wasteTypes: WasteType[] = ['All', 'Plastic', 'Metal', 'Paper', 'Glass', 'Mixed'];

  const filteredLocations = computed(() => {
    if (selectedFilter.value === 'All') {
      return locations.value;
    }
    
    return locations.value.filter(loc =>
      loc.materials?.some(m => m.toLowerCase() === selectedFilter.value.toLowerCase())
    );
  });

  const fetchLocations = async () => {
    const nuxt = useNuxtApp();
    const db = nuxt.$firebaseDb;
    
    if (db) {
      try {
        loading.value = true;
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
  };

  const selectLocation = (location: Location) => {
    selectedLocation.value = location;
    setTimeout(() => {
      const mapElement = document.querySelector('.map-container');
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500';
      case 'Full':
        return 'bg-orange-500';
      case 'Maintenance':
        return 'bg-red-500';
      default:
        return 'bg-green-500';
    }
  };

  const getTypeColor = (type: string) => {
    const lowerType = type.toLowerCase();
    switch (lowerType) {
      case 'plastic':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700';
      case 'metal':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600';
      case 'paper':
        return 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700';
      case 'glass':
        return 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700';
      case 'mixed':
      case 'electronics':
      case 'batteries':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600';
    }
  };

  return {
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
  };
};
