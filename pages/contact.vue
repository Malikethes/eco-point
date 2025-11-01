<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent mb-4 leading-tight pb-2">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-green-100 dark:border-gray-700 transition-colors">
          <div class="flex items-center mb-6">
            <MessageSquare :size="24" class="text-green-600 dark:text-green-400 mr-2" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ $t('contact.sendMessage') }}
            </h2>
          </div>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="space-y-2">
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('contact.yourName') }}
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                :placeholder="$t('contact.placeholders.name')"
                required
                class="w-full px-4 py-3 border-2 border-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              />
            </div>

            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('contact.email') }}
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :placeholder="$t('contact.placeholders.email')"
                required
                class="w-full px-4 py-3 border-2 border-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              />
            </div>

            <div class="space-y-2">
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ $t('contact.message') }}
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                :placeholder="$t('contact.placeholders.message')"
                required
                rows="6"
                class="w-full px-4 py-3 border-2 border-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Send :size="20" />
              {{ $t('contact.sendBtn') }}
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-blue-100 dark:border-gray-700 transition-colors">
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex-shrink-0">
                <Mail :size="24" class="text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ $t('contact.emailUs') }}</h3>
                <p class="text-gray-600 dark:text-gray-300">betterthannever@gmail.com</p>
                <p class="text-gray-600 dark:text-gray-300">betterthannever.support@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-blue-100 dark:border-gray-700 transition-colors">
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex-shrink-0">
                <Phone :size="24" class="text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ $t('contact.callUs') }}</h3>
                <p class="text-gray-600 dark:text-gray-300">+48 123 456 789</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('contact.workingHours') }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-blue-100 dark:border-gray-700 transition-colors">
            <div class="flex items-start space-x-4">
              <div class="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex-shrink-0">
                <MapPin :size="24" class="text-white" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-1">{{ $t('contact.visitUs') }}</h3>
                <p class="text-gray-600 dark:text-gray-300">Aleje Politechniki 7</p>
                <p class="text-gray-600 dark:text-gray-300">Łódź, 93-590</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('contact.teamTitle') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ $t('contact.teamSubtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div
            v-for="(member, index) in teamMembers"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-green-300 dark:hover:border-green-600"
          >
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-blue-500 mx-auto mb-4 flex items-center justify-center">
              <Users :size="40" class="text-white" />
            </div>
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-1">{{ member.name }}</h3>
            <p class="text-sm text-green-600 dark:text-green-400 font-medium mb-3">{{ member.role }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ member.description }}</p>
          </div>
        </div>
      </div>

      <!-- Mission Statement -->
      <div class="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-12 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">{{ $t('contact.missionTitle') }}</h2>
        <p class="text-lg text-green-50 max-w-3xl mx-auto">
          {{ $t('contact.missionDesc') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Mail, MessageSquare, Users, Send, MapPin, Phone } from 'lucide-vue-next';

const { t } = useI18n();

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const teamMembers = [
  {
    name: 'Mikita Kutsenko',
    role: 'Creative Designer',
    description: 'Documentation specialist creating detailed design systems and user guides'
  },
  {
    name: 'Dmytro Malinovskyi',
    role: 'Frontend Developer',
    description: 'Building responsive and intuitive web interfaces for EcoPoint platform'
  },
  {
    name: 'Aliaksandr Yurusau',
    role: 'Frontend Developer',
    description: 'Creating seamless user experiences with modern web technologies'
  },
  {
    name: 'Artem Hnap',
    role: 'Mobile Developer',
    description: 'Developing native mobile applications for iOS and Android platforms'
  },
  {
    name: 'Mikita Dzeviatau',
    role: 'Hardware Engineer',
    description: 'Designing and assembling smart recycling bin prototypes with IoT sensors'
  }
];

const handleSubmit = () => {
  console.log('Message sent:', formData.value);
  formData.value = { name: '', email: '', message: '' };
};
</script>