import { ref, computed, type Ref } from 'vue'

export function useTilt(elRef: Ref<HTMLElement | null>, maxAngle = 15) {
  const tiltX = ref(0)
  const tiltY = ref(0)
  const glareX = ref(50)
  const glareY = ref(50)
  let rafId: number | null = null
  let pendingPx = 0.5
  let pendingPy = 0.5

  function onMouseMove(e: MouseEvent) {
    if (!elRef.value) return
    const rect = elRef.value.getBoundingClientRect()
    pendingPx = (e.clientX - rect.left) / rect.width
    pendingPy = (e.clientY - rect.top) / rect.height

    // Throttle reactive updates to one per animation frame (fixes jank on 120Hz)
    if (rafId) return
    rafId = requestAnimationFrame(() => {
      tiltY.value  = (pendingPx - 0.5) * maxAngle * 2
      tiltX.value  = -(pendingPy - 0.5) * maxAngle * 2
      glareX.value = pendingPx * 100
      glareY.value = pendingPy * 100
      rafId = null
    })
  }

  function onMouseLeave() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null }
    tiltX.value  = 0
    tiltY.value  = 0
    glareX.value = 50
    glareY.value = 50
  }

  const tiltStyle = computed(() => ({
    transform: `perspective(1000px) rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`,
    transition: tiltX.value === 0 ? 'transform 0.5s ease' : 'none'
  }))

  const glareStyle = computed(() => ({
    background: `radial-gradient(circle at ${glareX.value}% ${glareY.value}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
    mixBlendMode: 'color-dodge' as const
  }))

  return { tiltStyle, glareStyle, onMouseMove, onMouseLeave, tiltX, tiltY }
}
