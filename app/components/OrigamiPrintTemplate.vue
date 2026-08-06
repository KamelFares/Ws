<script setup lang="ts">
// Print only component
function printResume() {
  window.print()
}
</script>

<template>
  <!-- Print CTA for web view -->
  <section id="fold" class="max-w-xl mx-auto px-6 py-16 print:hidden">
    <h2
      v-hieratic
      class="text-lg font-bold uppercase tracking-[0.15em] mb-8 flex items-baseline gap-3"
      style="color: var(--accent); font-family: var(--font-display);"
    >
      <span class="text-xs" style="color: var(--text-muted); font-family: var(--font-mono);">05</span>
      How to Fold
    </h2>

    <ol class="space-y-4 mb-8 text-sm" style="color: var(--text-dim); font-family: var(--font-body); counter-reset: fold;">
      <li class="relative pl-6 before:content-[counter(fold)] before:absolute before:left-0 before:font-bold before:text-[var(--accent)] before:font-display" style="counter-increment: fold;">
        <strong style="color: var(--text);">Print.</strong> Press Ctrl+P (or click the button below). Print at 100% scale on A4 paper. Make sure "Background graphics" is enabled.
      </li>
      <li class="relative pl-6 before:content-[counter(fold)] before:absolute before:left-0 before:font-bold before:text-[var(--accent)] before:font-display" style="counter-increment: fold;">
        <strong style="color: var(--text);">Cut.</strong> Cut along all the solid outer lines. You will end up with a shape that looks like a large triangle divided into four smaller triangles.
      </li>
      <li class="relative pl-6 before:content-[counter(fold)] before:absolute before:left-0 before:font-bold before:text-[var(--accent)] before:font-display" style="counter-increment: fold;">
        <strong style="color: var(--text);">Score.</strong> Using a ruler and a blunt edge, score firmly along the three dashed inner fold lines.
      </li>
      <li class="relative pl-6 before:content-[counter(fold)] before:absolute before:left-0 before:font-bold before:text-[var(--accent)] before:font-display" style="counter-increment: fold;">
        <strong style="color: var(--text);">Fold.</strong> Fold the triangles upward along their diagonal fold lines, bringing all three flaps together.
      </li>
      <li class="relative pl-6 before:content-[counter(fold)] before:absolute before:left-0 before:font-bold before:text-[var(--accent)] before:font-display" style="counter-increment: fold;">
        <strong style="color: var(--text);">Seal.</strong> Use a small piece of tape along the meeting edges to lock the shape into a 3D tetrahedron.
      </li>
    </ol>

    <div class="text-center">
      <button
        @click="printResume"
        class="px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:scale-105"
        style="background: var(--accent); color: var(--bg); font-family: var(--font-mono); box-shadow: 0 0 20px var(--accent-glow);"
        data-magnet
        data-mag-str="1.5"
      >
        Print My Resume (Ctrl+P)
      </button>
    </div>
  </section>

  <!-- Hidden in web view, visible only in print -->
  <div id="origami-print-template" class="hidden print:block fixed inset-0 bg-white z-[9999]">
    <div class="p-8 text-black" style="font-family: 'Inter', sans-serif;">
      <div class="mb-12">
        <h1 class="text-3xl font-bold mb-2">Origami Resume | Kamel Fares</h1>
        <p class="text-sm text-gray-600">Print at 100% scale on A4. Cut along solid lines. Fold along dashed lines. Tape the edges to form a 3D tetrahedron.</p>
      </div>

      <!-- The physical origami layout requires precise CSS for positioning faces -->
      <div class="relative w-[180mm] h-[156mm] mx-auto border border-gray-100">
        <!-- SVG Guides overlay -->
        <svg class="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 180 156" xmlns="http://www.w3.org/2000/svg">
          <polygon points="90,0 45,78 0,156 180,156 135,78" fill="none" stroke="#2a2a2a" stroke-width="0.6" stroke-linejoin="round"/>
          <line x1="45" y1="78" x2="135" y2="78" stroke="#888" stroke-width="0.35" stroke-dasharray="3,1.5"/>
          <line x1="45" y1="78" x2="90" y2="156" stroke="#888" stroke-width="0.35" stroke-dasharray="3,1.5"/>
          <line x1="135" y1="78" x2="90" y2="156" stroke="#888" stroke-width="0.35" stroke-dasharray="3,1.5"/>
          <text font-size="3.2" fill="#999" font-family="sans-serif" x="67.5" y="38" transform="rotate(-60,67.5,38)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="sans-serif" x="112.5" y="38" transform="rotate(60,112.5,38)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="sans-serif" x="20" y="115" transform="rotate(-60,20,115)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="sans-serif" x="160" y="115" transform="rotate(60,160,115)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="sans-serif" x="90" y="154" text-anchor="middle">CUT</text>
          <text font-size="3" fill="#aaa" font-family="sans-serif" x="90" y="75" text-anchor="middle">FOLD</text>
          <text font-size="3" fill="#aaa" font-family="sans-serif" x="65" y="119" transform="rotate(60,65,119)" text-anchor="middle">FOLD</text>
          <text font-size="3" fill="#aaa" font-family="sans-serif" x="115" y="119" transform="rotate(-60,115,119)" text-anchor="middle">FOLD</text>
        </svg>

        <!-- Center Face (Base) -->
        <div class="absolute w-[90mm] h-[78mm] left-[45mm] top-[78mm] flex flex-col items-center justify-center text-center p-4">
          <h2 class="font-bold text-lg">Kamel Fares</h2>
          <div class="text-xs text-gray-600 mb-2">Software Developer · Hamburg</div>
          <div class="text-[10px] leading-tight">
            Kamelfares122@gmail.com<br>
            linkedin.com/in/kamel-fares<br>
            B.Sc. CompEng · HAW Hamburg 
          </div>
        </div>

        <!-- Top Face -->
        <div class="absolute w-[90mm] h-[78mm] left-[45mm] top-[0] flex flex-col items-center justify-center p-4 origin-bottom rotate-180">
          <h3 class="font-bold text-sm border-b border-gray-300 w-full mb-2 pb-1 text-center">Experience</h3>
          <ul class="text-[9px] w-full space-y-2">
            <li><strong>Software Developer · Edel Optics</strong> (25-Pr)<br><span class="text-gray-500">Vue.js, Nuxt, Pinia, a11y</span></li>
            <li><strong>Hardware Designer · Dinge.cool</strong><br><span class="text-gray-500">Smart eyewear, NFC, N52 magnets</span></li>
            <li><strong>ML Engineer · Omdena</strong> (23)<br><span class="text-gray-500">Mental Support LLM, XGBoost</span></li>
          </ul>
        </div>

        <!-- Left Face -->
        <div class="absolute w-[90mm] h-[78mm] left-[0] top-[78mm] flex flex-col items-center justify-center p-4 origin-right rotate-[60deg]">
          <h3 class="font-bold text-sm border-b border-gray-300 w-full mb-2 pb-1 text-center">Skills</h3>
          <dl class="text-[9px] w-full grid grid-cols-[30%_70%] gap-y-1">
            <dt class="font-bold">Code</dt><dd class="text-gray-600">JS, PHP, C++, SQL</dd>
            <dt class="font-bold">FWs</dt><dd class="text-gray-600">Vue, Nuxt, Pinia, PyTorch</dd>
            <dt class="font-bold">Infra</dt><dd class="text-gray-600">Docker, PostgreSQL, Azure</dd>
            <dt class="font-bold">Langs</dt><dd class="text-gray-600">Arabic, English, German</dd>
          </dl>
        </div>

        <!-- Right Face -->
        <div class="absolute w-[90mm] h-[78mm] left-[90mm] top-[78mm] flex flex-col items-center justify-center p-4 origin-left rotate-[-60deg]">
          <h3 class="font-bold text-sm border-b border-gray-300 w-full mb-2 pb-1 text-center">Projects</h3>
          <ul class="text-[9px] w-full space-y-2">
            <li><strong>BeBlind.app</strong><br><span class="text-gray-500">Eye disease simulation web app</span></li>
            <li><strong>ML Suite</strong><br><span class="text-gray-500">PyTorch Cancer Classification</span></li>
            <li><strong>Web Scraper</strong><br><span class="text-gray-500">Selenium, rotating proxies</span></li>
            <li><strong>Port Scanner</strong><br><span class="text-gray-500">Rust multithreaded network tool</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  @page { size: A4; margin: 0; }
  body { background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>
