<script setup lang="ts">
import { heroData, experiences, projects, skills, education } from '~/data/resume'

useHead({
  title: 'Kamel Fares — Software Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Kamel Fares — Software Developer based in Hamburg. Vue.js, Nuxt, Machine Learning, Hardware Design.' }
  ]
})
</script>

<template>
  <main class="relative" style="background: var(--bg); color: var(--text);">

    <!-- ===== HERO ===== -->
    <section id="top" class="flex flex-col items-center justify-center text-center px-6 pt-10 pb-4">
      <h1
        v-hieratic
        class="text-4xl md:text-6xl font-bold mb-3"
        style="font-family: var(--font-display); color: var(--accent-light);"
      >
        {{ heroData.name }}
      </h1>
      <p
        v-hieratic.fast
        class="text-lg mb-2"
        style="color: var(--text-dim); font-family: var(--font-body);"
      >
        {{ heroData.title }}
      </p>
      <p class="text-sm italic mb-6" style="color: var(--text-muted);">
        {{ heroData.tagline }}
      </p>
      <div class="flex gap-4 flex-wrap justify-center">
        <a
          :href="`mailto:${heroData.email}`"
          class="text-sm px-4 py-2 rounded-lg border transition-all duration-300 hover:shadow-lg"
          style="border-color: var(--border); color: var(--accent); font-family: var(--font-mono);"
          data-magnet
          data-mag-str="1"
        >
          Email
        </a>
        <a
          :href="heroData.linkedin"
          target="_blank"
          rel="noopener"
          class="text-sm px-4 py-2 rounded-lg border transition-all duration-300 hover:shadow-lg"
          style="border-color: var(--border); color: var(--accent); font-family: var(--font-mono);"
          data-magnet
          data-mag-str="1"
        >
          LinkedIn
        </a>
        <a
          :href="heroData.github"
          target="_blank"
          rel="noopener"
          class="text-sm px-4 py-2 rounded-lg border transition-all duration-300 hover:shadow-lg"
          style="border-color: var(--border); color: var(--accent); font-family: var(--font-mono);"
          data-magnet
          data-mag-str="1"
        >
          GitHub
        </a>
        <a
          :href="heroData.youtube"
          target="_blank"
          rel="noopener"
          class="text-sm px-4 py-2 rounded-lg border transition-all duration-300 hover:shadow-lg"
          style="border-color: var(--border); color: var(--accent); font-family: var(--font-mono);"
          data-magnet
          data-mag-str="1"
        >
          YouTube
        </a>
      </div>
    </section>

    <!-- ===== PYRAMID NAV ===== -->
    <PyramidNav />

    <!-- ===== EXPERIENCE ===== -->
    <section id="experience" class="max-w-xl mx-auto px-6 py-16">
      <h2
        v-hieratic
        class="text-lg font-bold uppercase tracking-[0.15em] mb-8 flex items-baseline gap-3"
        style="color: var(--accent); font-family: var(--font-display);"
      >
        <span class="text-xs" style="color: var(--text-muted); font-family: var(--font-mono);">01</span>
        Experience
      </h2>

      <div class="space-y-6">
        <div
          v-for="exp in experiences"
          :key="exp.title"
          class="pl-4 border-l-2"
          style="border-color: var(--border);"
        >
          <div class="flex justify-between items-baseline flex-wrap gap-1">
            <span class="font-semibold text-sm" style="color: var(--text);">{{ exp.title }}</span>
            <span class="text-xs" style="color: var(--text-muted); font-family: var(--font-mono);">{{ exp.date }}</span>
          </div>
          <div class="text-xs mt-0.5" style="color: var(--text-dim);">{{ exp.org }}</div>
          <p class="text-sm mt-1" style="color: var(--text-muted);">{{ exp.description }}</p>
        </div>
      </div>
    </section>

    <!-- ===== PROJECTS ===== -->
    <section id="projects" class="max-w-7xl mx-auto px-6 py-16">
      <h2
        v-hieratic
        class="text-lg font-bold uppercase tracking-[0.15em] mb-8 flex items-baseline gap-3 justify-center"
        style="color: var(--accent); font-family: var(--font-display);"
      >
        <span class="text-xs" style="color: var(--text-muted); font-family: var(--font-mono);">02</span>
        Projects
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 justify-items-center">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </section>

    <!-- ===== SKILLS ===== -->
    <section id="skills" class="max-w-xl mx-auto px-6 py-16">
      <h2
        v-hieratic
        class="text-lg font-bold uppercase tracking-[0.15em] mb-8 flex items-baseline gap-3"
        style="color: var(--accent); font-family: var(--font-display);"
      >
        <span class="text-xs" style="color: var(--text-muted); font-family: var(--font-mono);">03</span>
        Skills
      </h2>

      <div class="space-y-3">
        <div
          v-for="skill in skills"
          :key="skill.label + skill.items"
          class="flex gap-3 items-baseline"
        >
          <span
            class="text-xs font-semibold uppercase tracking-wider min-w-[90px] flex-shrink-0"
            style="color: var(--text-dim);"
          >
            {{ skill.label }}
          </span>
          <span class="text-sm" style="color: var(--text-muted); font-family: var(--font-mono);">
            {{ skill.items }}
          </span>
        </div>
      </div>
    </section>

    <!-- ===== EDUCATION ===== -->
    <section id="education" class="max-w-xl mx-auto px-6 py-16">
      <h2
        v-hieratic
        class="text-lg font-bold uppercase tracking-[0.15em] mb-8 flex items-baseline gap-3"
        style="color: var(--accent); font-family: var(--font-display);"
      >
        <span class="text-xs" style="color: var(--text-muted); font-family: var(--font-mono);">04</span>
        Education
      </h2>

      <div class="space-y-5">
        <div
          v-for="edu in education"
          :key="edu.title"
          class="pl-4 border-l-2"
          style="border-color: var(--border);"
        >
          <div class="font-semibold text-sm" style="color: var(--text);">{{ edu.title }}</div>
          <div class="text-xs" style="color: var(--text-dim);">{{ edu.school }}</div>
          <div v-if="edu.date" class="text-xs mt-0.5" style="color: var(--text-muted); font-family: var(--font-mono);">{{ edu.date }}</div>
          <p v-if="edu.courses" class="text-xs mt-1" style="color: var(--text-muted);">
            <span style="font-family: var(--font-mono);">{{ edu.courses }}</span>
          </p>
        </div>
      </div>
    </section>

    <!-- ===== ORIGAMI PRINT TEMPLATE (Hidden on web, visible on print) ===== -->
    <OrigamiPrintTemplate />

    <!-- ===== FOOTER ===== -->
    <footer class="text-center py-12 px-6" style="border-top: 1px solid var(--border);">
      <p class="text-sm" style="color: var(--text-muted); font-family: var(--font-mono);">
        kamel-fares.tech
      </p>
      <div class="flex gap-4 justify-center mt-3">
        <a href="https://www.youtube.com/@mathematikss" target="_blank" rel="noopener" class="text-xs transition-colors" style="color: var(--text-dim);">YouTube</a>
        <a href="https://linkedin.com/in/kamel-fares" target="_blank" rel="noopener" class="text-xs transition-colors" style="color: var(--text-dim);">LinkedIn</a>
        <a href="https://beblind.app" target="_blank" rel="noopener" class="text-xs transition-colors" style="color: var(--text-dim);">BeBlind.app</a>
      </div>
    </footer>

  </main>
</template>
