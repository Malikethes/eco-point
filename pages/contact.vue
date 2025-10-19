<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="container mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">We're happy to hear from you</p>
      </div>

      <div class="max-w-2xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
          <form class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input 
                type="email" 
                placeholder="your@email.com"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <select class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Suggestion</option>
                <option>Add Recycling Point</option>
                <option>Technical Issue</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea 
                rows="5" 
                placeholder="Your message..."
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            
            <button 
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
