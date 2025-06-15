<template>
  <nav class="navigation">
    <div class="navigation__container">
      <div class="navigation__content">
        <img :src="Logo" class="w-12
        ">

        <!-- Desktop Navigation -->
        <div class="navigation__links">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" class="navigation__link">
            {{ link.name }}
          </a>
          <button class="navigation__search-btn">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="navigation__mobile-btn">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="navigation__mobile-menu">
        <div class="navigation__mobile-menu-links">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" class="navigation__mobile-menu-link">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import '../assets/scss/navbar.scss'
import Logo from '../assets/logo.svg'

const mobileMenuOpen = ref(false)

// Navigation links
const navLinks = reactive([
  { name: 'github', href: 'https://github.com/cubicLauncher' },
])

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
