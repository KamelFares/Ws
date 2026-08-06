<script setup lang="ts">
import type { Project } from '~/data/resume'

const props = defineProps<{ project: Project }>()
const cardRef = ref<HTMLElement | null>(null)
const { tiltStyle, glareStyle, onMouseMove, onMouseLeave } = useTilt(cardRef)

const attributeColors: Record<string, string> = {
  DARK: '#6B21A8',
  LIGHT: '#FBBF24',
  FIRE: '#DC2626',
  WATER: '#2563EB',
  EARTH: '#92400E',
  WIND: '#16A34A'
}
</script>

<template>
  <div
    ref="cardRef"
    class="relative w-[280px] rounded-lg overflow-hidden cursor-pointer select-none"
    :style="tiltStyle"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Card border / frame -->
    <div class="border-2 rounded-lg p-3" style="border-color: var(--accent); background: var(--bg-card);">
      <!-- Card Name -->
      <div class="mb-3">
        <h3 class="text-base font-bold tracking-wide" style="color: var(--accent-light);">
          {{ project.name }}
        </h3>
      </div>

      <!-- Type line -->
      <div class="text-[10px] tracking-wider uppercase mb-1 px-1" style="color: var(--text-muted); font-family: var(--font-mono);">
        [ {{ project.type.replace('/ Effect', '').trim() }} ]
      </div>

      <!-- Description -->
      <div
        class="text-xs leading-relaxed p-2 rounded mb-2 min-h-[60px]"
        style="background: var(--bg-elevated); color: var(--text-dim); border: 1px solid var(--border);"
      >
        {{ project.description }}
      </div>

      <!-- Tech -->
      <div class="text-[10px] px-1" style="color: var(--text-muted); font-family: var(--font-mono);">
        {{ project.tech }}
      </div>
    </div>
  </div>
</template>
