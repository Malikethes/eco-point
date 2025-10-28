<template>
  <div>
    <div class="flex items-center justify-between mb-2">
      <p class="text-gray-700 dark:text-gray-300 font-medium leading-tight">{{ label }}</p>
      <p :class="['font-bold leading-tight', valueColorClass]">{{ displayValue }}</p>
    </div>
    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
      <div 
        :class="['h-3 rounded-full transition-all duration-500', barColorClass]"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
    <p v-if="subtitle" class="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-tight">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  value: number;
  max: number;
  unit?: string;
  subtitle?: string;
  color?: 'green' | 'blue' | 'gray';
}>();

const percentage = computed(() => {
  return Math.min((props.value / props.max) * 100, 100);
});

const displayValue = computed(() => {
  const current = props.unit ? `${props.value} ${props.unit}` : props.value;
  const maximum = props.unit ? `${props.max} ${props.unit}` : props.max;
  return `${current} / ${maximum}`;
});

const barColorClass = computed(() => {
  switch (props.color) {
    case 'green':
      return 'bg-gradient-to-r from-green-600 to-green-500';
    case 'blue':
      return 'bg-gradient-to-r from-blue-600 to-blue-500';
    case 'gray':
    default:
      return 'bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700';
  }
});

const valueColorClass = computed(() => {
  switch (props.color) {
    case 'green':
      return 'text-green-600 dark:text-green-400';
    case 'blue':
      return 'text-blue-600 dark:text-blue-400';
    case 'gray':
    default:
      return 'text-gray-700 dark:text-gray-300';
  }
});
</script>
