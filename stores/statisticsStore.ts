import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where
} from 'firebase/firestore';
import type { User } from '~/types/user';

export const useStatisticsStore = defineStore('statistics', () => {
  const nuxt = useNuxtApp();
  const db = nuxt.$firebaseDb;

  const userStats = ref<User | null>(null);
  const globalRank = ref(0);
  const topUsers = ref<any[]>([]);
  const monthlyActivity = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const totalPoints = computed(() => userStats.value?.pointsEarned || 0);
  const pointsBalance = computed(() => userStats.value?.pointsBalance || 0);
  const itemsRecycled = computed(() => userStats.value?.totalSessions || 0);
  const totalSessions = computed(() => userStats.value?.totalSessions || 0);
  const currentMonthSessions = computed(() => userStats.value?.currentMonthSessions || 0);
  
  const achievements = computed(() => {
    return userStats.value?.achievements?.length || 0;
  });
  
  const rewards = computed(() => {
    return userStats.value?.rewards?.length || 0;
  });
  
  const co2Saved = computed(() => {
    const sessions = userStats.value?.totalSessions || 0;
    return Math.round(sessions * 0.27 * 10) / 10;
  });

  const treesEquivalent = computed(() => {
    return Math.round(co2Saved.value / 21);
  });

  const fetchUserStats = async (userId: string) => {
    if (!userId) {
      error.value = 'User ID is required';
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      
      if (userDoc.exists()) {
        userStats.value = userDoc.data() as User;
      } else {
        error.value = 'User not found';
        userStats.value = null;
      }
    } catch (e: any) {
      console.error('Error fetching user stats:', e);
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  const fetchGlobalRanking = async (userId: string) => {
    if (!userId) return;

    loading.value = true;
    error.value = null;

    try {
      const usersQuery = query(
        collection(db, 'users'),
        orderBy('pointsEarned', 'desc'),
        limit(20)
      );

      const snapshot = await getDocs(usersQuery);
      const allUsers: any[] = [];
      let userRank = 0;
      let userInTop = false;

      snapshot.docs.forEach((docSnap, index) => {
        const data = docSnap.data();
        const rank = index + 1;
        const isCurrentUser = docSnap.id === userId;

        if (isCurrentUser) {
          userRank = rank;
          userInTop = true;
        }

        allUsers.push({
          rank,
          name: isCurrentUser ? 'You' : data.name || data.username || 'Anonymous',
          points: data.pointsEarned || 0,
          isYou: isCurrentUser
        });
      });

      if (!userInTop && userStats.value) {
        const rankQuery = query(
          collection(db, 'users'),
          where('pointsEarned', '>', userStats.value.pointsEarned)
        );
        const rankSnapshot = await getDocs(rankQuery);
        userRank = rankSnapshot.size + 1;

        allUsers.push({
          rank: userRank,
          name: 'You',
          points: userStats.value.pointsEarned,
          isYou: true
        });
      }

      globalRank.value = userRank;
      topUsers.value = allUsers.slice(0, 10); 
      
      if (!userInTop) {
        const currentUserData = allUsers.find(u => u.isYou);
        if (currentUserData) {
          topUsers.value.push(currentUserData);
        }
      }
    } catch (e: any) {
      console.error('Error fetching global ranking:', e);
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  // Fetch monthly activity
  const fetchMonthlyActivity = async () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonth = new Date().getMonth();
    
    monthlyActivity.value = months.slice(Math.max(0, currentMonth - 2), currentMonth + 1).map(month => ({
      name: month,
      items: Math.floor(Math.random() * 60) + 20
    }));

    if (userStats.value?.currentMonthSessions) {
      monthlyActivity.value[monthlyActivity.value.length - 1].items = userStats.value.currentMonthSessions;
    }
  };

  const loadUserData = async (userId: string) => {
    await fetchUserStats(userId);
    await Promise.all([
      fetchGlobalRanking(userId),
      fetchMonthlyActivity()
    ]);
  };

  const reset = () => {
    userStats.value = null;
    globalRank.value = 0;
    topUsers.value = [];
    monthlyActivity.value = [];
    loading.value = false;
    error.value = null;
  };

  return {
    // State
    userStats,
    globalRank,
    topUsers,
    monthlyActivity,
    loading,
    error,

    // Computed
    totalPoints,
    pointsBalance,
    itemsRecycled,
    totalSessions,
    currentMonthSessions,
    achievements,
    rewards,
    co2Saved,
    treesEquivalent,

    // Actions
    fetchUserStats,
    fetchGlobalRanking,
    fetchMonthlyActivity,
    loadUserData,
    reset
  };
});

