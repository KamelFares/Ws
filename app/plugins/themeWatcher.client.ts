export default defineNuxtPlugin(() => {
  const themeStore = useGodThemeStore()

  // Pinia persist plugin already restores the theme from localStorage automatically.
  // We only need to watch the store and apply the CSS body class.
  watch(
    () => themeStore.activeTheme,
    (theme) => {
      if (import.meta.client) {
        document.body.classList.remove('theme-obelisk', 'theme-slifer', 'theme-ra')
        document.body.classList.add(`theme-${theme}`)
      }
    },
    { immediate: true }
  )
})
