<script setup lang="ts">
const { y } = useWindowScroll()
const { height: windowHeight } = useWindowSize()

const scrollPercent = computed(() => {
  if (!import.meta.client) return 0
  const docHeight = document.documentElement.scrollHeight - windowHeight.value
  if (docHeight <= 0) return 0
  return Math.min(1, y.value / docHeight)
})

const lifePoints = computed(() => {
  return Math.round(8000 * (1 - scrollPercent.value))
})

const lpColor = computed(() => {
  if (lifePoints.value > 5000) return 'var(--lp-high)'
  if (lifePoints.value > 2000) return 'var(--lp-mid)'
  return 'var(--lp-low)'
})

const displayLP = ref(8000)
let animFrame: number | null = null

watch(lifePoints, (target) => {
  if (animFrame) cancelAnimationFrame(animFrame)
  const animate = () => {
    const diff = target - displayLP.value
    if (Math.abs(diff) < 1) {
      displayLP.value = target
      return
    }
    displayLP.value += diff * 0.15
    animFrame = requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  <ClientOnly>
    <div
      class="fixed bottom-6 right-6 z-40 px-4 py-2 rounded-lg border"
      style="
        background: var(--bg-card);
        border-color: var(--border-strong);
        font-family: var(--font-mono);
        backdrop-filter: blur(8px);
      "
    >
      <div class="text-[10px] uppercase tracking-[0.2em] mb-0.5" style="color: var(--text-muted);">
        LP
      </div>
      <div
        class="text-2xl font-bold tabular-nums tracking-wider"
        :style="{ color: lpColor, textShadow: `0 0 10px ${lpColor}` }"
      >
        {{ String(Math.round(displayLP)).padStart(4, '0') }}
      </div>
      <!-- Scroll bar -->
      <div class="mt-1 h-1 w-full rounded-full overflow-hidden" style="background: var(--bg-elevated);">
        <div
          class="h-full rounded-full transition-all duration-150"
          :style="{ width: `${(1 - scrollPercent) * 100}%`, background: lpColor }"
        />
      </div>
    </div>
  </ClientOnly>
</template>
