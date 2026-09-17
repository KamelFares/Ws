<script setup lang="ts">
const cursorRef = ref<HTMLElement | null>(null)
let rawX = -100
let rawY = -100
let curX = -100
let curY = -100
const isActive = ref(false)
const isMobile = ref(false)
let animFrameId: number | null = null

function tick() {
  if (!cursorRef.value) return  // loop dies naturally — no re-queue on missing ref

  curX += (rawX - curX) * 0.4
  curY += (rawY - curY) * 0.4

  cursorRef.value.style.left = `${curX.toFixed(1)}px`
  cursorRef.value.style.top  = `${curY.toFixed(1)}px`

  animFrameId = requestAnimationFrame(tick)
}

function startLoop() {
  if (animFrameId) return
  animFrameId = requestAnimationFrame(tick)
}

function stopLoop() {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId)
    animFrameId = null
  }
}

onMounted(() => {
  const mq = window.matchMedia('(max-width: 768px)')
  isMobile.value = mq.matches

  if (!isMobile.value) {
    document.body.style.cursor = 'none'
    startLoop()
  }

  document.addEventListener('mousemove', (e) => {
    rawX = e.clientX
    rawY = e.clientY
    isActive.value = true
  })

  mq.addEventListener('change', (e) => {
    isMobile.value = e.matches
    if (e.matches) {
      document.body.style.cursor = ''
      isActive.value = false
      stopLoop()
    } else {
      document.body.style.cursor = 'none'
      startLoop()
    }
  })
})

onUnmounted(() => {
  stopLoop()
  document.body.style.cursor = ''
})
</script>

<template>
  <ClientOnly>
    <div
      ref="cursorRef"
      class="mag-cursor"
      :class="{ active: isActive }"
    />
  </ClientOnly>
</template>
