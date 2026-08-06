import { computed, type Ref } from 'vue'

export function useFormEnergy(fields: Ref<Record<string, string>>) {
  const completionPercent = computed(() => {
    const entries = Object.values(fields.value)
    if (entries.length === 0) return 0
    const filled = entries.filter(v => v.trim().length > 0).length
    return Math.round((filled / entries.length) * 100)
  })

  const isValid = computed(() => {
    const f = fields.value
    return (
      f.name?.trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email || '') &&
      f.message?.trim().length > 5
    )
  })

  const energyLevel = computed(() => completionPercent.value / 100)

  const animationDuration = computed(() => {
    // Speeds up as more fields are filled: 3s -> 0.5s
    return `${3 - energyLevel.value * 2.5}s`
  })

  const glowIntensity = computed(() => {
    return energyLevel.value * 20 // 0 to 20px shadow
  })

  const cssVars = computed(() => ({
    '--energy-duration': animationDuration.value,
    '--energy-glow': `${glowIntensity.value}px`,
    '--energy-opacity': `${energyLevel.value}`,
    '--energy-percent': `${completionPercent.value}%`
  }))

  return { completionPercent, isValid, energyLevel, cssVars }
}
