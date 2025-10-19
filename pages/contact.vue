<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="container mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">{{ $t('contact.title') }}</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="max-w-2xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ $t('contact.sendMessage') }}</h2>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('contact.yourName') }}
              </label>
              <input 
                type="text" 
                :placeholder="$t('contact.placeholders.name')"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('contact.email') }}
              </label>
              <input 
                type="email" 
                :placeholder="$t('contact.placeholders.email')"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('contact.subject') }}
              </label>
              <select class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">{{ $t('contact.dropdown.select') }}</option>
                <option value="general">{{ $t('contact.dropdown.general') }}</option>
                <option value="support">{{ $t('contact.dropdown.support') }}</option>
                <option value="partnership">{{ $t('contact.dropdown.partnership') }}</option>
                <option value="other">{{ $t('contact.dropdown.other') }}</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ $t('contact.message') }}
              </label>
              <textarea 
                rows="5" 
                :placeholder="$t('contact.placeholders.message')"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            
            <button 
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
            >
              {{ $t('contact.sendBtn') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { locale, setLocale } = useI18n();

</script>