<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Location } from '~/types/location';

const props = defineProps<{
  locations: Location[];
  selectedMaterial?: string;
}>();

const { t, locale } = useI18n();

const mapContainer = ref<HTMLElement | null>(null);
let map: L.Map | null = null;
const markers: L.Marker[] = [];

// Color mapping for different materials
const materialColors: Record<string, string> = {
  plastic: '#3b82f6', // blue
  glass: '#10b981', // green
  paper: '#f59e0b', // orange
  metal: '#6b7280', // gray
  electronics: '#8b5cf6', // purple
  batteries: '#ef4444', // red
  allTypes: '#64748b' // slate
};

const getMaterialTranslation = (material: string) => {
  const materialKey = material.toLowerCase();
  return t(`map.${materialKey}`);
};

const getMarkerIcon = (materials?: string[]) => {
  let color = materialColors.allTypes;
  
  if (materials && materials.length > 0) {
    const firstMaterial = (materials[0] ?? '').toLowerCase();
    color = materialColors[firstMaterial] || materialColors.allTypes;
  }

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 25px;
        height: 25px;
        border-radius: 50% 50% 50% 0;
        border: 3px solid white;
        transform: rotate(-45deg);
        box-shadow: 0 3px 8px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 10px;
          height: 10px;
          margin: 5px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [25, 25],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });
};

const initMap = () => {
  if (!mapContainer.value || map) return;

  map = L.map(mapContainer.value).setView([52.2297, 21.0122], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  addMarkers();
};

const getPopupContent = (loc: Location) => {
  return `
    <div style="min-width: 150px;">
      <b style="font-size: 14px;">${loc.name}</b><br/>
      <span style="font-size: 12px; color: #666;">${loc.address || ''}</span>
      ${loc.materials && loc.materials.length > 0 ? `
        <div style="margin-top: 8px;">
          ${loc.materials.map(m => `
            <span style="
              display: inline-block;
              background-color: ${materialColors[m.toLowerCase()] || materialColors.allTypes};
              color: white;
              padding: 2px 8px;
              border-radius: 4px;
              font-size: 11px;
              margin: 2px;
            ">${getMaterialTranslation(m)}</span>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
};

const addMarkers = () => {
  if (!map) return;

  // Clear existing markers
  markers.forEach(marker => marker.remove());
  markers.length = 0;

  // Filter locations based on selected material
  const filteredLocations = props.locations.filter(loc => {
    if (!props.selectedMaterial || props.selectedMaterial === 'allTypes') {
      return true;
    }
    return loc.materials?.some(m => 
      m.toLowerCase() === props.selectedMaterial?.toLowerCase()
    );
  });

  filteredLocations.forEach((loc) => {
    if (map && loc.latitude && loc.longitude) {
      const marker = L.marker(
        [loc.latitude, loc.longitude],
        { icon: getMarkerIcon(loc.materials) }
      ).addTo(map);
      
      marker.bindPopup(getPopupContent(loc));
      markers.push(marker);
    }
  });

  // Fit map to show all markers
  if (filteredLocations.length > 0) {
    const bounds = L.latLngBounds(
      filteredLocations.map(loc => [loc.latitude, loc.longitude] as [number, number])
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  }
};

onMounted(() => {
  setTimeout(initMap, 100);
});

// Watch for location, material, and language changes
watch(() => [props.locations, props.selectedMaterial, locale.value], () => {
  if (map) {
    addMarkers();
  }
}, { deep: true });
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

.leaflet-container {
  width: 100%;
  height: 100%;
}

.custom-marker {
  background: transparent;
  border: none;
}
</style>