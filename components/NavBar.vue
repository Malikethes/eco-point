<template>
  <nav class="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 hover:opacity-80 transition">
          <img src="assets/images/Logo_ecopoint_fully_transparent_notext.png" alt="Ecopoint logo" class="w-10 h-10">
          <span class="text-xl font-bold leading-tight" style="color: #007337;">EcoPoint</span>
        </NuxtLink>
        
        <!-- Center Navigation Links -->
        <div class="hidden md:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
          <NuxtLink 
            to="/" 
            class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition leading-tight"
          >
            {{ $t('nav.home') }}
          </NuxtLink>
          <NuxtLink 
            to="/map" 
            class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition leading-tight"
          >
            {{ $t('nav.map') }}
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition leading-tight"
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
              class="px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-all leading-tight"
              @click="switchLocale('en')"
            >
              EN
            </button>
            <button 
              :class="locale === 'pl' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'hover:bg-gray-50 dark:hover:bg-gray-700'"
              class="px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-all leading-tight"
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
            <!-- Sun icon for dark mode -->
            <svg v-if="colorMode.preference === 'dark'" class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon for light mode -->
            <svg v-else class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          
          <!-- Divider -->
          <div class="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-700"/>
          
          <!-- User Section -->
          <div v-if="user" class="relative">
            <button 
              @click.stop="toggleDropdown"
              class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <img v-if="user.photoURL" :src="user.photoURL" alt="avatar" class="w-9 h-9 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700">
              <div v-else class="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <span class="text-white font-bold text-sm">{{ displayName[0]?.toUpperCase() }}</span>
              </div>
              <span class="hidden lg:block text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">{{ displayName }}</span>
              <ChevronDown :size="16" :class="['text-gray-600 dark:text-gray-400 transition-transform', isDropdownOpen ? 'rotate-180' : '']" />
            </button>

            <!-- Dropdown Menu -->
            <Transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <div 
                v-if="isDropdownOpen"
                v-click-outside="closeDropdown"
                class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
              >
                <NuxtLink
                  to="/profile"
                  @click="isDropdownOpen = false"
                  class="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <User :size="18" />
                  <span class="leading-tight">{{ $t('nav.profile') }}</span>
                </NuxtLink>

                <NuxtLink
                  to="/settings"
                  @click="isDropdownOpen = false"
                  class="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Settings :size="18" />
                  <span class="leading-tight">{{ $t('nav.settings') }}</span>
                </NuxtLink>

                <div class="border-t border-gray-200 dark:border-gray-700 my-2"></div>

                <button
                  @click="handleSignOut"
                  class="w-full flex items-center gap-3 px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut :size="18" />
                  <span class="leading-tight">{{ $t('nav.signOut') }}</span>
                </button>
              </div>
            </Transition>
          </div>
          
          <!-- Sign In Button -->
          <NuxtLink 
            v-else 
            to="/login" 
            class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all leading-tight"
          >
            Sign In
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '~/composables/useAuth';
import { getDoc, doc } from 'firebase/firestore';
import { useFirebaseStore } from '~/stores/authStore';
import { ChevronDown, User, Settings, LogOut } from 'lucide-vue-next';

const store = useFirebaseStore();

const { user, logout } = useAuth();
const router = useRouter();
const nuxt = useNuxtApp();
const db = nuxt.$firebaseDb;
const firstName = ref('');
const isDropdownOpen = ref(false);

const colorMode = useColorMode();
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};

// i18n
const { locale, setLocale } = useI18n();
const switchLocale = (newLocale) => {
  setLocale(newLocale);
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    // Add listener with a small delay to avoid immediate trigger
    setTimeout(() => {
      document.addEventListener('click', el.clickOutsideEvent);
    }, 0);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
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
  isDropdownOpen.value = false;
  try {
    await logout();
    router.push('/');
  } catch (e) {
    console.error('Sign out failed', e);
  }
};
</script>