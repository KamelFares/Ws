<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { y } = useWindowScroll()
const { width: windowWidth, height: windowHeight } = useWindowSize()

const catSize = 100

// Track scroll direction (up vs down)
const isScrollingUp = ref(false)
watch(y, (newY, oldY) => {
  const diff = newY - oldY
  if (diff < -1) {
    isScrollingUp.value = true
  } else if (diff > 1) {
    isScrollingUp.value = false
  }
})

// Hiss state management
const isHissing = ref(false)
let hissTimeout: ReturnType<typeof setTimeout> | null = null

const triggerHiss = () => {
  isHissing.value = true
  
  if (hissTimeout) clearTimeout(hissTimeout)
  
  hissTimeout = setTimeout(() => {
    isHissing.value = false
  }, 1500)
}

const scrollPercent = computed(() => {
  if (typeof document === 'undefined') return 0
  const docHeight = document.documentElement.scrollHeight - windowHeight.value
  if (docHeight <= 0) return 0
  
  // Cut document height in half so animation ends halfway down the page
  const targetScrollHeight = docHeight / 2
  return Math.min(1, Math.max(0, y.value / targetScrollHeight))
})

const isSleeping = computed(() => scrollPercent.value >= 1 && !isHissing.value)

// Only flip horizontally across Y axis when scrolling up AND cat is not sleeping
const shouldFlip = computed(() => isScrollingUp.value && !isSleeping.value)

// Calculate translation position to go to the bottom right with padding
const transformStyle = computed(() => {
  if (typeof window === 'undefined') return {}
  
  const edgePadding = 20
  
  const maxX = windowWidth.value - catSize - edgePadding
  const maxY = windowHeight.value - catSize - edgePadding
  
  const tx = scrollPercent.value * maxX
  const ty = scrollPercent.value * maxY
  
  return {
    transform: `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`
  }
})

const config = useRuntimeConfig()
const getAssetUrl = (filename: string) => {
  const base = config.app.baseURL || '/'
  return base.endsWith('/') ? `${base}${filename.replace(/^\//, '')}` : `${base}/${filename.replace(/^\//, '')}`
}

// Cycle frames or show the hiss/sleep image
const currentFrame = computed(() => {
  // Override all other frames if the cat is currently hissing
  if (isHissing.value) {
    return getAssetUrl('hiss.png')
  }

  // Lock on sleep.png when the scroll animation finishes
  if (scrollPercent.value >= 1) {
    return getAssetUrl('sleep.png')
  }

  const pixelsPerFrame = 55
  const frameCount = 7
  const frameIndex = Math.floor(y.value / pixelsPerFrame) % frameCount
  return getAssetUrl(`${frameIndex + 1}.png`)
})
</script>

<template>
  <ClientOnly>
    <div
      class="fixed top-0 left-0 z-[100] pointer-events-none transition-transform duration-75 ease-out"
      :style="transformStyle"
    >
      <div class="relative flex items-center justify-center w-[100px] h-[100px]">
        
        <!-- Hiss Text (Only visible when hissing) -->
        <span 
          v-if="isHissing" 
          class="absolute -top-4 text-yellow-500 font-bold italic text-sm tracking-widest drop-shadow-md animate-bounce"
        >
          *hiss*
        </span>

        <!-- Glowing Yellow Halo Background -->
        <div class="absolute inset-4 rounded-full bg-yellow-400/40 blur-md animate-pulse"></div>

        <!-- Cat Image Container (Handles Y-axis flip when scrolling up, except when sleeping) -->
        <div :class="['transition-transform duration-200', shouldFlip ? '-scale-x-100' : 'scale-x-100']">
          <img
            :src="currentFrame"
            alt="Running Cat"
            @click="triggerHiss"
            :class="[
              'relative object-contain select-none filter drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] pointer-events-auto cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95',
              isHissing ? 'w-[50px] h-[50px]' : 'w-[100px] h-[100px]'
            ]"
          />
        </div>
      </div>
    </div>
  </ClientOnly>
</template>