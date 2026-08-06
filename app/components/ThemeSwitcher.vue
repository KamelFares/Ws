<script setup lang="ts">
const store = useGodThemeStore()
</script>

<template>
  <div class="fixed top-6 right-6 z-50 flex gap-2">
    <button
      v-for="theme in (['ra', 'obelisk', 'slifer'] as const)"
      :key="theme"
      @click="store.setTheme(theme)"
      class="w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-xs font-bold uppercase tracking-wider"
      :class="[
        store.activeTheme === theme
          ? 'scale-110 shadow-lg shadow-[var(--accent-glow)] border-[var(--accent)]'
          : 'opacity-50 hover:opacity-80 border-gray-600'
      ]"
      :style="{
        background: theme === 'ra' ? '#C9A84C' : theme === 'obelisk' ? '#4a7ff7' : '#d32f2f',
        color: theme === 'ra' ? '#0a0a08' : '#fff'
      }"
      :title="`Switch to ${theme} theme`"
    >
      {{ theme === 'ra' ? 'RA' : theme === 'obelisk' ? 'OB' : 'SL' }}
    </button>
  </div>
</template>
