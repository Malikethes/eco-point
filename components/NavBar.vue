<template>
  <nav class="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition">
          <img src="assets/images/Logo_ecopoint_fully_transparent_notext.png" alt="Ecopoint logo" class="w-10 h-10">
          <span class="text-xl font-bold" style="color: #007337;">EcoPoint</span>
        </NuxtLink>
        
        <!-- Center Navigation Links -->
        <div class="hidden md:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
          <NuxtLink 
            to="/" 
            class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            {{ $t('nav.home') }}
          </NuxtLink>
          <NuxtLink 
            to="/map" 
            class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            {{ $t('nav.map') }}
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            {{ $t('nav.contact') }}
          </NuxtLink>
        </div>

        <!-- Right Side: Controls & Auth -->
        <div class="flex items-center gap-2">
          <!-- Language Switcher -->
          <div class="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
            <button 
              :class="locale === 'en' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'hover:bg-gray-50 dark:hover:bg-gray-700'"
              class="px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-all"
              @click="switchLocale('en')"
            >
              EN
            </button>
            <button 
              :class="locale === 'pl' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'hover:bg-gray-50 dark:hover:bg-gray-700'"
              class="px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-all"
              @click="switchLocale('pl')"
            >
              PL
            </button>
          </div>
          
          <!-- Dark Mode Toggle -->
          <button 
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" 
            :title="colorMode.preference === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            @click="toggleDarkMode"
          >
            <span v-if="colorMode.preference === 'dark'" class="text-xl">☀️</span>
            <span v-else class="text-xl">🌙</span>
          </button>
          
          <!-- Divider -->
          <div class="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-700"/>
          
          <!-- User Section -->
          <div v-if="user" class="flex items-center gap-3">
            <div class="flex items-center gap-2">
              <img v-if="user.photoURL" :src="user.photoURL" alt="avatar" class="w-9 h-9 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700">
              <span class="hidden lg:block text-sm font-medium text-gray-700 dark:text-gray-300">{{ displayName }}</span>
            </div>
            <button 
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              @click="handleSignOut"
            >
              Sign Out
            </button>
          </div>
          
          <!-- Sign In Button -->
          <NuxtLink 
            v-else 
            to="/login" 
            class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            Sign In
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '~/composables/useAuth';
import { getDoc, doc } from 'firebase/firestore';

const { user, logout } = useAuth();
const router = useRouter();
const nuxt = useNuxtApp();
const db = nuxt.$firebaseDb;
const firstName = ref('');

const colorMode = useColorMode();
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

// i18n
const { locale, setLocale } = useI18n();
const switchLocale = (newLocale) => {
  setLocale(newLocale);
};

watch(user, async (u) => {
  firstName.value = '';
  if (!u) return;
  try {
    const snap = await getDoc(doc(db, 'users', u.uid));
    if (snap.exists()) {
      const data = snap.data();
      firstName.value = data.name;
    }
  } catch (e) {
    console.error('Failed to load user profile', e);
  }
}, { immediate: true });

const displayName = computed(() => {
  if (firstName.value) return firstName.value;
  const u = user.value;
  if (!u) return '';
  return u.displayName || (u.email ? u.email.split('@')[0] : 'Account');
});

const handleSignOut = async () => {
  try {
    await logout();
    router.push('/');
  } catch (e) {
    console.error('Sign out failed', e);
  }
};
</script>