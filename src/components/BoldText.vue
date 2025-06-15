<template>
  <div ref="textRef" class="hover-text" @mousemove="handleMouseMove" @mouseenter="isHovering = true"
    @mouseleave="handleMouseLeave">
    <span v-for="(char, index) in characters" :key="index" :class="char === ' ' ? 'space' : 'char'">
      {{ char === ' ' ? '\u00A0' : char }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'

interface Props {
  text?: string
  hoverRadius?: number
  maxWeight?: number
  baseWeight?: number
  fontFamily?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Hover sobre este texto increíble',
  hoverRadius: 150,
  maxWeight: 900,
  baseWeight: 100,
  fontFamily: 'Grotesque',
})

const textRef: Ref<HTMLDivElement | null> = ref(null)
const isHovering = ref(false)

const characters = computed(() => props.text.split(''))

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

const updateCharacterWeights = (mouseX: number, mouseY: number) => {
  if (!textRef.value || !isHovering.value) return

  const chars = textRef.value.querySelectorAll('.char') as NodeListOf<HTMLElement>

  chars.forEach((char) => {
    const rect = char.getBoundingClientRect()
    const charCenterX = rect.left + rect.width / 2
    const charCenterY = rect.top + rect.height / 2

    const distance = calculateDistance(mouseX, mouseY, charCenterX, charCenterY)

    const weight = distance < props.hoverRadius ? calculateWeight(distance) : props.baseWeight

    char.style.setProperty('--font-weight', weight.toString())
  })
}

const calculateWeight = (distance: number) => {
  const influence = 1 - distance / props.hoverRadius
  return Math.round(props.baseWeight + (props.maxWeight - props.baseWeight) * influence * influence)
}

const resetCharacterWeights = () => {
  if (!textRef.value) return

  const chars = textRef.value.querySelectorAll('.char') as NodeListOf<HTMLElement>
  chars.forEach((char) => {
    char.style.setProperty('--font-weight', props.baseWeight.toString())
  })
}

const handleMouseMove = (event: MouseEvent) => {
  updateCharacterWeights(event.clientX, event.clientY)
}

const handleMouseLeave = () => {
  isHovering.value = false
  resetCharacterWeights()
}
</script>

<style scoped>
@font-face {
  font-family: 'Grotesque';
  src: url('../assets/fonts/Grotesque.ttf') format('truetype');
  font-weight: 100 900;
  font-display: swap;
}

.hover-text {
  font-family: v-bind(fontFamily), 'Grotesque', sans-serif;
  font-size: 8rem;
  line-height: 1.2;
  font-weight: 100;
  color: white;
  cursor: default;
  user-select: none;
}

.hover-text :deep(.char),
.hover-text :deep(.space) {
  display: inline-block;
  font-variation-settings: 'wght' var(--font-weight, 100);
  transition: font-variation-settings 0.2s ease;
}

@media (max-width: 768px) {
  .hover-text {
    font-size: 2.5rem;
  }
}
</style>
