<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <!-- Loading State -->
    <div v-if="statisticsStore.loading" class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col items-center justify-center min-h-[50vh]">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 dark:border-green-400"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">{{ $t('profile.loading') || 'Loading...' }}</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="statisticsStore.error" class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
        <p class="text-red-600 dark:text-red-400">{{ statisticsStore.error }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Stats Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        <!-- Points Earned -->
        <div class="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-yellow-100 text-sm mb-2 leading-tight">{{ $t('profile.pointsEarned') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ statisticsStore.totalPoints.toLocaleString() }}</p>
            </div>
            <Coins :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- Points Balance -->
        <div class="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-green-100 text-sm mb-2 leading-tight">{{ $t('profile.pointsBalance') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ statisticsStore.pointsBalance.toLocaleString() }}</p>
            </div>
            <Wallet :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- Total Sessions -->
        <div class="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-purple-100 text-sm mb-2 leading-tight">{{ $t('profile.totalSessions') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ statisticsStore.totalSessions }}</p>
            </div>
            <Activity :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- Current Month Sessions -->
        <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-indigo-100 text-sm mb-2 leading-tight">{{ $t('profile.monthSessions') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ statisticsStore.currentMonthSessions }}</p>
            </div>
            <Calendar :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- Global Rank -->
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-blue-100 text-sm mb-2 leading-tight">{{ $t('profile.globalRank') }}</p>
              <p class="text-4xl font-bold leading-tight">#{{ statisticsStore.globalRank || '-' }}</p>
            </div>
            <TrendingUp :size="48" class="text-white opacity-80" />
          </div>
        </div>


        <!-- CO2 Saved -->
        <div class="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-teal-100 text-sm mb-2 leading-tight">{{ $t('profile.co2Saved') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ statisticsStore.co2Saved }} kg</p>
            </div>
            <Leaf :size="48" class="text-white opacity-80" />
          </div>
        </div>

        <!-- Achievements -->
        <div class="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-pink-100 text-sm mb-2 leading-tight">{{ $t('profile.achievements') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ statisticsStore.achievements }}</p>
            </div>
            <Award :size="48" class="text-white opacity-80" />
          </div>
        </div>
        
        <!-- Rewards -->
        <div class="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-amber-100 text-sm mb-2 leading-tight">{{ $t('profile.rewards') }}</p>
              <p class="text-4xl font-bold leading-tight">{{ statisticsStore.rewards }}</p>
            </div>
            <Gift :size="48" class="text-white opacity-80" />
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
                :value="statisticsStore.co2Saved"
                :max="50"
                unit="kg"
                :subtitle="$t('profile.treesEquivalent', { count: statisticsStore.treesEquivalent })"
                color="green"
              />

              <!-- Recycling Goal -->
              <ProgressBar
                :label="$t('profile.recyclingGoal')"
                :value="statisticsStore.itemsRecycled"
                :max="200"
                :subtitle="$t('profile.keepGoing')"
                color="blue"
              />
            </div>
          </div>

          <!-- Achievements Section -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-100 dark:border-gray-700 transition-colors">
            <div class="flex items-center gap-2 mb-6">
              <Award :size="24" class="text-pink-600 dark:text-pink-400" />
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{{ $t('profile.achievementsTitle') }}</h2>
            </div>

            <div v-if="statisticsStore.userAchievements.length === 0" class="text-center py-8 text-gray-500 dark:text-gray-400">
              {{ $t('profile.noAchievements') }}
            </div>

            <div v-else class="space-y-4">
              <div
                v-for="(achievement, index) in statisticsStore.userAchievements"
                :key="index"
                class="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border border-pink-200 dark:border-pink-800 rounded-xl p-4 transition-all hover:shadow-md"
              >
                <div class="flex items-start gap-3">
                  <div class="bg-pink-500 text-white rounded-lg p-2 flex-shrink-0">
                    <Award :size="20" />
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                      {{ $i18n.locale === 'pl' ? achievement.namePL : achievement.nameEN }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                      {{ $i18n.locale === 'pl' ? achievement.descriptionPL : achievement.descriptionEN }}
                    </p>
                  </div>
                </div>
              </div>
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
                v-for="(userItem, index) in statisticsStore.topUsers"
                :key="index"
                :class="[
                  'flex items-center justify-between p-4 rounded-xl transition-all',
                  userItem.isYou 
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
                    {{ userItem.isYou ? '#' + userItem.rank : index < 3 ? ['🥇', '🥈', '🥉'][index] : '#' + userItem.rank }}
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white leading-tight">{{ userItem.name }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 leading-tight">{{ userItem.points.toLocaleString() }} {{ $t('profile.pts') }}</p>
                  </div>
                </div>
                <div v-if="userItem.isYou" class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
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
import { ref, onMounted } from 'vue';
import { Trophy, TrendingUp, Recycle, Leaf, Calendar, Users, Activity, Coins, Wallet, Gift, Award } from 'lucide-vue-next';
import ProgressBar from '~/components/ProgressBar.vue';
import { useStatisticsStore } from '~/stores/statisticsStore';
import useAuth from '~/composables/useAuth';

const { t } = useI18n();
const statisticsStore = useStatisticsStore();
const { user } = useAuth();

onMounted(async () => {
  if (user.value?.uid) {
    await statisticsStore.loadUserData(user.value.uid);
  }
});

watch(user, async (newUser) => {
  if (newUser?.uid) {
    await statisticsStore.loadUserData(newUser.uid);
  } else {
    statisticsStore.reset();
  }
});
</script>
