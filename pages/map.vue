<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Recycling Points Map</h1>
        <p class="text-gray-600">Find the nearest recycling collection point</p>
      </div>

      <!-- Search and Filters -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div class="grid md:grid-cols-3 gap-4">
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Search by Address
            </label>
            <input 
              type="text" 
              placeholder="Enter address or district name..."
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Material Type
            </label>
            <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Types</option>
              <option>Plastic</option>
              <option>Glass</option>
              <option>Paper</option>
              <option>Metal</option>
              <option>Electronics</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Map Container and List -->
      <div class="grid lg:grid-cols-3 gap-6">
        <!-- Map Placeholder -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="h-[600px] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div class="text-center">
                <div class="text-6xl mb-4">🗺️</div>
                <p class="text-xl font-semibold text-gray-700 mb-2">
                  Interactive Map
                </p>
                <p class="text-gray-500">
                  Map with collection points will be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Points List -->
        <div class="space-y-4">
          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-green-500">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Collection Point #1</h3>
            <p class="text-sm text-gray-600 mb-3">123 Example St</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Plastic</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Glass</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Paper</span>
            </div>
            <p class="text-sm text-gray-500">📍 0.5 km from you</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-blue-500">
            <h3 class="font-bold text-lg text-gray-900 mb-2">Eco Center</h3>
            <p class="text-sm text-gray-600 mb-3">45 Green Ave</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Plastic</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Electronics</span>
              <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Batteries</span>
            </div>
            <p class="text-sm text-gray-500">📍 1.2 km from you</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-l-4 border-yellow-500">
            <h3 class="font-bold text-lg text-gray-900 mb-2">RecycleHub</h3>
            <p class="text-sm text-gray-600 mb-3">78 Central St</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Metal</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Paper</span>
            </div>
            <p class="text-sm text-gray-500">📍 2.1 km from you</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
