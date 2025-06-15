<template>
  <section class="hero">
    <!-- Background Pattern -->
    <div class="hero__background"></div>

    <div class="hero__container">
      <div class="hero__content">
        <BoldText text="CubicLauncher" />

        <!-- Enhanced Tagline -->
        <div class="hero__tagline">
          <p class="hero__tagline-text">//AUN NO SE ME OCURRE NADA XD</p>
          <div class="hero__tagline-divider"></div>
        </div>

        <!-- Feature Highlights -->
        <div class="hero__features">
          <div v-for="feature in features" :key="feature.title" class="hero__feature">
            <div class="hero__feature-icon">{{ feature.icon }}</div>
            <h3 class="hero__feature-title">{{ feature.title }}</h3>
            <p class="hero__feature-description">{{ feature.description }}</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="hero__cta">
          <button class="hero__btn hero__btn--primary" @click="handleGetStarted">
            Descargar
          </button>
          <button class="hero__btn hero__btn--secondary" @click="handleViewExamples">
            Github
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import '../assets/scss/hero.scss'
import BoldText from './BoldText.vue'

// Features
// TODO
const features = reactive([
  {
    icon: '❓',
    title: 'TODO',
    description: 'TODO',
  },
  {
    icon: '❓',
    title: 'TODO',
    description: 'TODO',
  },
  {
    icon: '❓',
    title: 'TODO',
    description: 'TODO',
  },
])

// Event handlers
const handleGetStarted = () => {
  // TODO
  // Esto te cambiaria a la vista /downloads la cual esta pendiente
}

const handleViewExamples = () => {
  location.href = "https://github.com/CubicLauncher"
}
</script>
