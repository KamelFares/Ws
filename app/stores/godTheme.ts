import { defineStore } from 'pinia'

export type GodTheme = 'obelisk' | 'slifer' | 'ra'

export const useGodThemeStore = defineStore('godTheme', {
  state: () => ({
    activeTheme: 'ra' as GodTheme
  }),
  actions: {
    setTheme(theme: GodTheme) {
      this.activeTheme = theme
    },
    cycleTheme() {
      const order: GodTheme[] = ['ra', 'obelisk', 'slifer']
      const idx = order.indexOf(this.activeTheme)
      this.activeTheme = order[(idx + 1) % order.length]
    }
  },
  persist: true
})
