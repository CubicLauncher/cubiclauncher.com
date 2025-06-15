<script setup lang="ts">
<<<<<<< HEAD
import LandingHero from '@/components/LandingHero.vue'
</script>

<template>
  <main>
    <LandingHero />
  </main>
</template>
=======
</script>

<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <div class="bg-indigo-700 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Welcome to CubicMC
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your next generation Minecraft experience
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#features"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Everything you need to enjoy your Minecraft experience
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Feature 1 -->
            <div class="flex flex-col items-center">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="mt-6 text-xl font-medium text-gray-900">High Performance</h3>
              <p class="mt-2 text-base text-gray-500 text-center">
                Optimized server performance for smooth gameplay experience
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="flex flex-col items-center">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="mt-6 text-xl font-medium text-gray-900">Community Focused</h3>
              <p class="mt-2 text-base text-gray-500 text-center">
                Active and friendly community with regular events
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="flex flex-col items-center">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 class="mt-6 text-xl font-medium text-gray-900">Custom Features</h3>
              <p class="mt-2 text-base text-gray-500 text-center">
                Unique gameplay elements and custom plugins
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
>>>>>>> 1a849e340e48e0f2c80df648eabc3531a7693a89
