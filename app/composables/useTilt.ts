import { ref, type Ref } from 'vue'

export function useTilt(elRef: Ref<HTMLElement | null>, maxAngle = 15) {
  const tiltX = ref(0)
  const tiltY = ref(0)
  const glareX = ref(50)
  const glareY = ref(50)

  function onMouseMove(e: MouseEvent) {
    if (!elRef.value) return
    const rect = elRef.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height
    tiltY.value = (px - 0.5) * maxAngle * 2
    tiltX.value = -(py - 0.5) * maxAngle * 2
    glareX.value = px * 100
    glareY.value = py * 100
  }

  function onMouseLeave() {
    tiltX.value = 0
    tiltY.value = 0
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
