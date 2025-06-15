<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <AppNavbar id="__navbar" />
  <RouterView />
</template>
