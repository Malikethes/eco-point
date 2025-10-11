<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
    <div class="container mx-auto px-4 py-16">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-xl text-gray-600">
          We're always happy to hear your questions and suggestions
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input 
                type="email" 
                placeholder="your@email.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Suggestion for Improvement</option>
                <option>Add Recycling Point</option>
                <option>Technical Issue</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea 
                rows="5" 
                placeholder="Describe your question or suggestion..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="text-3xl mr-4">📧</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                  <p class="text-gray-600">info@gmail.com</p>
                  <p class="text-gray-600">support@qr-recycle.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-3xl mr-4">📱</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p class="text-gray-600">+48 (XXX) XXX-XXXX</p>
                  <p class="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-3xl mr-4">📍</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Address</h4>
                  <p class="text-gray-600">Łódź</p>
                  <p class="text-gray-600">123 Example Street</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-4">Social Media</h3>
            <p class="mb-6 opacity-90">
              Follow us for news and updates
            </p>
            <div class="flex gap-4">
              <a href="#" class="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition">
                <span class="text-2xl">👍</span>
              </a>
              <a href="#" class="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition">
                <span class="text-2xl">📸</span>
              </a>
              <a href="#" class="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition">
                <span class="text-2xl">🐦</span>
              </a>
              <a href="#" class="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition">
                <span class="text-2xl">💼</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
