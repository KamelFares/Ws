<script setup lang="ts">
const cursorRef = ref<HTMLElement | null>(null)
let rawX = -100
let rawY = -100
let curX = -100
let curY = -100
const isActive = ref(false)
const isMobile = ref(false)

function tick() {
  if (isMobile.value || !cursorRef.value) {
    requestAnimationFrame(tick)
    return
  }

  // Smooth 1:1 cursor position following without any magnetic pull
  curX += (rawX - curX) * 0.4
  curY += (rawY - curY) * 0.4

  cursorRef.value.style.left = `${curX.toFixed(1)}px`
  cursorRef.value.style.top = `${curY.toFixed(1)}px`

  requestAnimationFrame(tick)
}

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  if (isMobile.value) return

  document.body.style.cursor = 'none'

  requestAnimationFrame(tick)

  document.addEventListener('mousemove', (e) => {
    rawX = e.clientX
    rawY = e.clientY
    isActive.value = true
  })

  window.addEventListener('resize', () => {
    isMobile.value = window.matchMedia('(max-width: 768px)').matches
    if (isMobile.value) {
      document.body.style.cursor = ''
      isActive.value = false
    } else {
      document.body.style.cursor = 'none'
    }
  })

  onUnmounted(() => {
    document.body.style.cursor = ''
  })
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
