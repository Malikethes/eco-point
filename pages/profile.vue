<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Stats Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <!-- Total Points -->
        <div class="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-green-100 text-sm mb-2 leading-tight">{{ $t('profile.totalPoints') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ totalPoints.toLocaleString() }}</p>
            </div>
            <Trophy :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- Global Rank -->
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-blue-100 text-sm mb-2 leading-tight">{{ $t('profile.globalRank') }}</p>
              <p class="text-4xl font-bold leading-tight">#{{ globalRank }}</p>
            </div>
            <TrendingUp :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- Items Recycled -->
        <div class="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-green-100 text-sm mb-2 leading-tight">{{ $t('profile.itemsRecycled') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ itemsRecycled }}</p>
            </div>
            <Recycle :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- CO2 Saved -->
        <div class="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-teal-100 text-sm mb-2 leading-tight">{{ $t('profile.co2Saved') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ co2Saved }} kg</p>
            </div>
            <Leaf :size="48" class="text-white opacity-80" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Environmental Impact & Monthly Activity -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Environmental Impact -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-100 dark:border-gray-700 transition-colors">
            <div class="flex items-center gap-2 mb-6">
              <Leaf :size="24" class="text-green-600 dark:text-green-400" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{{ $t('profile.environmentalImpact') }}</h2>
            </div>

            <div class="space-y-6">
              <!-- CO2 Progress -->
              <ProgressBar
                :label="$t('profile.co2EmissionsSaved')"
                :value="co2Saved"
                :max="50"
                unit="kg"
                :subtitle="$t('profile.treesEquivalent', { count: treesEquivalent })"
                color="green"
              />

              <!-- Recycling Goal -->
              <ProgressBar
                :label="$t('profile.recyclingGoal')"
                :value="itemsRecycled"
                :max="200"
                :subtitle="$t('profile.keepGoing')"
                color="blue"
              />
            </div>
          </div>

          <!-- Monthly Activity -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-100 dark:border-gray-700 transition-colors">
            <div class="flex items-center gap-2 mb-6">
              <Calendar :size="24" class="text-blue-600 dark:text-blue-400" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{{ $t('profile.monthlyActivity') }}</h2>
            </div>

            <div class="space-y-4">
              <ProgressBar
                v-for="(month, index) in monthlyActivity"
                :key="index"
                :label="month.name"
                :value="month.items"
                :max="60"
                color="gray"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Eco-Ranking -->
        <div class="lg:col-span-1">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-100 dark:border-gray-700 transition-colors sticky top-8">
            <div class="flex items-center gap-2 mb-6">
              <Users :size="24" class="text-purple-600 dark:text-purple-400" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{{ $t('profile.ecoRanking') }}</h2>
            </div>

            <div class="space-y-3">
              <div
                v-for="(user, index) in topUsers"
                :key="index"
                :class="[
                  'flex items-center justify-between p-4 rounded-xl transition-all',
                  user.isYou 
                    ? 'bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 border-2 border-green-400 dark:border-green-600' 
                    : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                ]"
              >
                <div class="flex items-center gap-3">
                  <div :class="[
                    'flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm',
                    index === 0 ? 'bg-yellow-400 text-yellow-900' : 
                    index === 1 ? 'bg-gray-300 text-gray-700' :
                    index === 2 ? 'bg-orange-300 text-orange-900' :
                    'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                  ]">
                    {{ user.isYou ? '#' + user.rank : index < 3 ? ['🥇', '🥈', '🥉'][index] : '#' + user.rank }}
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white leading-tight">{{ user.name }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-tight">{{ user.points.toLocaleString() }} {{ $t('profile.pts') }}</p>
                  </div>
                </div>
                <div v-if="user.isYou" class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {{ $t('profile.you') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Trophy, TrendingUp, Recycle, Leaf, Calendar, Users } from 'lucide-vue-next';
import ProgressBar from '~/components/ProgressBar.vue';

const { t } = useI18n();

const totalPoints = ref(2847);
const globalRank = ref(12);
const itemsRecycled = ref(156);
const co2Saved = ref(42.5);
const treesEquivalent = ref(8);

const monthlyActivity = ref([
  { name: 'Jan', items: 45 },
  { name: 'Feb', items: 52 },
  { name: 'Mar', items: 59 }
]);

const topUsers = ref([
  { rank: 1, name: 'GreenGuru', points: 5420, isYou: false },
  { rank: 2, name: 'EcoMaster', points: 4890, isYou: false },
  { rank: 3, name: 'RecycleKing', points: 4235, isYou: false },
  { rank: 4, name: 'NatureLover', points: 3890, isYou: false },
  { rank: 5, name: 'PlanetSaver', points: 3654, isYou: false },
  { rank: 12, name: 'You', points: 2847, isYou: true }
]);
</script>
