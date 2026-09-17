import { computed } from 'vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'

/**
 * Shared scroll progress composable — single reactive source of truth.
 * Consumed by ScrollCat and LifePointCounter to avoid duplicate instances.
 */
export const useScrollProgress = () => {
  const { y } = useWindowScroll()
  const { height: windowHeight } = useWindowSize()

  // Animation endpoint at 50% document scroll depth (matches ScrollCat behaviour)
  const scrollPercent = computed(() => {
    if (!import.meta.client) return 0
    const docHeight = document.documentElement.scrollHeight - windowHeight.value
    if (docHeight <= 0) return 0
    const target = docHeight / 2
    return Math.min(1, Math.max(0, y.value / target))
  })

  return { y, windowHeight, scrollPercent }
}
