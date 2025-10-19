<template>
  <nav class="bg-white shadow-lg border-b border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition">
          <span class="text-3xl"><img src="assets/images/Logo_ecopoint_fully_transparent_notext.png" alt="Ecopoint logo" class="mx-auto w-10 h-auto"></span>
          <span class="text-xl font-bold" style="color: #007337;">EcoPoint</span>
        </NuxtLink>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink 
            to="/" 
            class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/map" 
            class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition"
          >
            Map
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium transition"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Login Button -->
        <div class="flex items-center space-x-3">
          <div v-if="user" class="flex items-center space-x-3">
            <img v-if="user.photoURL" :src="user.photoURL" alt="avatar" class="w-8 h-8 rounded-full object-cover">
            <span class="text-gray-700 font-medium">{{ displayName }}</span>
            <button class="ml-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition" @click="handleSignOut">Sign Out</button>
          </div>
          <NuxtLink v-else to="/login" class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition transform hover:scale-105">Sign In</NuxtLink>
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