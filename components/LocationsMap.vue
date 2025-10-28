<script setup lang="ts">
import { onMounted, watch } from 'vue';
import type { Location } from '~/types/location';

const props = defineProps<{
  locations: Location[];
  selectedMaterial?: string;
  selectedLocation?: Location | null;
}>();

const { t, locale } = useI18n();
const { mapContainer, initializeMap, addMarkers, flyToLocation } = useMap();

const getMaterialTranslation = (material: string) => {
  return t(`map.${material.toLowerCase()}`);
};

onMounted(() => {
  setTimeout(() => {
    initializeMap();
    addMarkers(props.locations, getMaterialTranslation, props.selectedMaterial);
  }, 100);
});

watch(() => [props.locations, props.selectedMaterial, locale.value], () => {
  addMarkers(props.locations, getMaterialTranslation, props.selectedMaterial);
}, { deep: true });

watch(() => props.selectedLocation, (newLocation) => {
  if (newLocation) {
    flyToLocation(newLocation);
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

.leaflet-container {
  width: 100%;
  height: 100%;
}

.custom-marker {
  background: transparent;
  border: none;
}
</style>