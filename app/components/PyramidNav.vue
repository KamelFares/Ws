<script setup lang="ts">
const bands = [
  { label: 'About', href: '#top', points: '180,0 150,40 210,40', fontSize: '9px' },
  { label: 'Experience', href: '#experience', points: '150,40 210,40 240,80 120,80', fontSize: '11px' },
  { label: 'Projects', href: '#projects', points: '120,80 240,80 270,120 90,120', fontSize: '13px' },
  { label: 'Skills', href: '#skills', points: '90,120 270,120 300,160 60,160', fontSize: '15px' },
  { label: 'Education', href: '#education', points: '60,160 300,160 330,200 30,200', fontSize: '17px' },
  { label: 'Fold', href: '#fold', points: '30,200 330,200 360,240 0,240', fontSize: '20px' }
]

const textYPositions = [22, 60, 100, 140, 180, 220]
</script>

<template>
  <nav class="flex justify-center pt-0 pb-6 -mt-4" aria-label="Main navigation">
    <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md">
      <!-- Outer triangle outline -->
      <polygon
        points="180,0 0,240 360,240"
        fill="none"
        stroke="var(--border-strong)"
        stroke-width="1"
      />

      <!-- Bands -->
      <a
        v-for="(band, i) in bands"
        :key="band.label"
        :href="band.href"
      >
        <polygon
          :points="band.points"
          fill="transparent"
          stroke="var(--border)"
          stroke-width="0.5"
          class="transition-all duration-300 cursor-pointer"
          @mouseenter="($event.target as SVGElement).style.fill = 'rgba(255, 215, 0, 0.15)'"
          @mouseleave="($event.target as SVGElement).style.fill = 'transparent'"
        />
        <text
          x="180"
          :y="textYPositions[i]"
          text-anchor="middle"
          dominant-baseline="middle"
          class="uppercase tracking-[0.15em] pointer-events-none select-none"
          :style="{
            fill: 'var(--text-dim)',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: band.fontSize
          }"
        >
          {{ band.label }}
        </text>
      </a>
    </svg>
  </nav>
</template>