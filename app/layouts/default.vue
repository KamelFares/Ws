<script setup lang="ts">
const store = useGodThemeStore()
</script>

<template>
  <div :class="`theme-${store.activeTheme}`" class="min-h-screen">
    <!-- Magnetic Cursor (client-only) -->
    <ClientOnly>
      <MagneticCursor />
    </ClientOnly>

    <!-- Scroll Cat -->
    <ScrollCat />

    <!-- Page Content -->
    <slot />
  </div>
</template>
