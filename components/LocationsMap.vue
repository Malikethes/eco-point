<script setup lang="ts">
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { collection, getDocs } from 'firebase/firestore';
import type { Location } from '~/types/location';

const props = defineProps<{
  locations?: Location[];
  selectedMaterial?: string;
}>();

const mapContainer = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

onMounted(async () => {
  if (!mapContainer.value) return;

  // Initialize map centered on Warsaw
  map = L.map(mapContainer.value).setView([52.2297, 21.0122], 13);

  // Add tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // Fix default marker icon issue
  type IconDefaultPrototype = {
    _getIconUrl?: string | (() => string | undefined);
  };
  delete (L.Icon.Default.prototype as unknown as IconDefaultPrototype)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });

  // Add markers from props or Firebase
  if (props.locations && props.locations.length > 0) {
    props.locations.forEach((loc) => {
      if (map) {
        const marker = L.marker([loc.latitude, loc.longitude]).addTo(map);
        if (loc.name) {
          marker.bindPopup(`<b>${loc.name}</b>`);
        }
      }
    });
  } else {
    // Fetch from Firebase if no props
    const nuxt = useNuxtApp();
    const db = nuxt.$firebaseDb;
    if (db) {
      const locationsRef = collection(db, 'locations');
      const snapshot = await getDocs(locationsRef);
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.latitude && data.longitude && map) {
          const marker = L.marker([data.latitude, data.longitude]).addTo(map);
          if (data.name) {
            marker.bindPopup(`<b>${data.name}</b>`);
          }
        }
      });
    }
  }
});
</script>

<template>
  <div ref="mapContainer" class="w-full h-full rounded-xl" />
</template>

<style>
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
  position: absolute;
  left: 0;
  top: 0;
}
</style>