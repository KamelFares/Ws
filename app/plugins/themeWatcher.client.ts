export default defineNuxtPlugin(() => {
  const themeStore = useGodThemeStore()

  // Try to restore from localStorage
  if (import.meta.client) {
    const saved = localStorage.getItem('godTheme')
    if (saved && ['obelisk', 'slifer', 'ra'].includes(saved)) {
      themeStore.setTheme(saved as 'obelisk' | 'slifer' | 'ra')
    }
  }

  // Watch and apply
  watch(
    () => themeStore.activeTheme,
    (theme) => {
      if (import.meta.client) {
        document.body.classList.remove('theme-obelisk', 'theme-slifer', 'theme-ra')
        document.body.classList.add(`theme-${theme}`)
        localStorage.setItem('godTheme', theme)
      }
    },
    { immediate: true }
  )
})
