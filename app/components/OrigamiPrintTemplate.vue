<script setup lang="ts">
// Print only component function
function printResume() {
  window.print()
}
</script>

<template>
  <!-- Print CTA for web view -->
  <section id="fold" class="max-w-xl mx-auto px-6 py-16 print:hidden">
    <h2
      class="text-lg font-bold uppercase tracking-[0.15em] mb-8 flex items-baseline gap-3"
      style="color: var(--accent); font-family: var(--font-display);"
    >
      <span class="text-xs" style="color: var(--text-muted); font-family: var(--font-mono);">05</span>
      How to Fold
    </h2>

    <ol class="space-y-4 mb-8 text-sm" style="color: var(--text-dim); font-family: var(--font-body); counter-reset: fold;">
      <li class="relative pl-6 before:content-[counter(fold)] before:absolute before:left-0 before:font-bold before:text-[var(--accent)] before:font-display" style="counter-increment: fold;">
        <strong style="color: var(--text);">Print.</strong> Press Ctrl+P (or click the button below). Print at 100% scale on A4 paper. Make sure "Background graphics" is enabled in your print settings.
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
        class="px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:scale-105 cursor-pointer"
        style="background: var(--accent, #C9A84C); color: var(--bg, #0a0a0a); font-family: var(--font-mono);"
        data-magnet="s"
        data-mag-strength="1.5"
      >
        Print My Resume (Ctrl+P)
      </button>
    </div>
  </section>

  <!-- TELEPORT: Moves the print template to the root body, bypassing the main layout -->
  <Teleport to="body">
    <!-- Hidden in web view, visible only in print -->
    <div id="origami-print-template">

      <div class="origami-container">
        <!-- Center Face (Base) -->
        <div class="face face-center">
          <div class="face-content">
            <div class="face-title">Kamel Fares</div>
            <div class="face-subtitle">Software Developer · Hamburg</div>
            <div class="face-domain">kamel-fares.tech</div>
            <div class="face-contact">
              Kamelfares122@gmail.com<br>
              linkedin.com/in/kamel-fares<br>
              github.com/kamel-fares<br>
              B.Sc. CompEng · HAW Hamburg 
            </div>
          </div>
        </div>

        <!-- Top Face -->
        <div class="face face-top">
          <div class="face-content">
            <div class="face-title">Experience</div>
            <div class="face-item"><strong>Software Developer · Edel Optics</strong><br>2025–Present<br><span>Vue.js, Nuxt, Pinia, PHP, a11y</span></div>
            <div class="face-item"><strong>Founder · glassez.cool & dinge.cool</strong><br>2026–Present<br><span>Smart eyewear, NFC, Peek</span></div>
            <div class="face-item"><strong>ML Engineer · Omdena</strong><br>2023<br><span>Mental Support LLM, XGBoost</span></div>
            <div class="face-item"><strong>Mathematikss · YouTube</strong><br>2025–Present<br><span>Math visuals: Manim, R, LaTeX</span></div>
          </div>
        </div>

        <!-- Left Face -->
        <div class="face face-left">
          <div class="face-content">
            <div class="face-title">Skills</div>
            <div class="face-skills-wrap">
              <div class="face-skill-group"><strong>Code:</strong> JS, PHP, C, C++, Java, SQL</div>
              <div class="face-skill-group"><strong>Frameworks:</strong> Vue.js, Nuxt, Pinia, PyTorch</div>
              <div class="face-skill-group"><strong>Infra:</strong> Docker, PostgreSQL, Azure</div>
              <div class="face-skill-group"><strong>Certs:</strong> AI-900, DP-100, GitHub</div>
              <div class="face-skill-group"><strong>Spoken:</strong> Arabic C2, English C2, German C1</div>
            </div>
          </div>
        </div>

        <!-- Right Face -->
        <div class="face face-right">
          <div class="face-content">
            <div class="face-title">Projects</div>
            <div class="face-item"><strong>BeBlind.app</strong><span>Eye disease simulation web app</span></div>
            <div class="face-item"><strong>Port Scanner (Rust)</strong><span>Multithreaded network analysis</span></div>
          </div>
        </div>

        <!-- SVG Guides -->
        <svg class="origami-guides" viewBox="0 0 180 156" xmlns="http://www.w3.org/2000/svg">
          <polygon points="90,0 45,78 0,156 180,156 135,78" fill="none" stroke="#2a2a2a" stroke-width="0.6" stroke-linejoin="round"/>
          <line x1="45" y1="78" x2="135" y2="78" stroke="#888" stroke-width="0.35" stroke-dasharray="3,1.5"/>
          <line x1="45" y1="78" x2="90" y2="156" stroke="#888" stroke-width="0.35" stroke-dasharray="3,1.5"/>
          <line x1="135" y1="78" x2="90" y2="156" stroke="#888" stroke-width="0.35" stroke-dasharray="3,1.5"/>
          <text font-size="3.2" fill="#999" font-family="Inter,sans-serif" x="67.5" y="38" transform="rotate(-60,67.5,38)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="Inter,sans-serif" x="112.5" y="38" transform="rotate(60,112.5,38)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="Inter,sans-serif" x="20" y="115" transform="rotate(-60,20,115)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="Inter,sans-serif" x="160" y="115" transform="rotate(60,160,115)" text-anchor="middle">CUT</text>
          <text font-size="3.2" fill="#999" font-family="Inter,sans-serif" x="90" y="154" text-anchor="middle">CUT</text>
          <text font-size="3" fill="#aaa" font-family="Inter,sans-serif" x="90" y="75" text-anchor="middle">FOLD</text>
          <text font-size="3" fill="#aaa" font-family="Inter,sans-serif" x="65" y="119" transform="rotate(60,65,119)" text-anchor="middle">FOLD</text>
          <text font-size="3" fill="#aaa" font-family="Inter,sans-serif" x="115" y="119" transform="rotate(-60,115,119)" text-anchor="middle">FOLD</text>
        </svg>
      </div>

      <div class="print-footer">
        <p>kamel-fares.tech · Print at 100% scale on A4</p>
        <div class="legend">
          <div class="legend-item"><div class="legend-line-solid"></div> Cut</div>
          <div class="legend-item"><div class="legend-line-dashed"></div> Fold</div>
        </div>
      </div>

    </div>
  </Teleport>
</template>

<style>
#origami-print-template {
  display: none;
}

@media print {
  * { 
    -webkit-print-color-adjust: exact !important; 
    print-color-adjust: exact !important; 
    box-sizing: border-box !important; 
  }
  
  @page { 
    size: A4 portrait; 
    margin: 0 !important; 
  }
  
  html, body { 
    background: #fff !important; 
    color: #1a1a1a !important; 
    font-family: 'Inter', 'Segoe UI', sans-serif !important; 
    width: 100vw !important;
    height: 100vh !important;
    overflow: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  body > *:not(#origami-print-template) { 
    display: none !important; 
  }

  #origami-print-template {
    display: flex !important; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw !important;
    height: 100vh !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .origami-container { 
    position: relative; 
    width: 180mm; 
    height: 156mm; 
  }

  .face { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; }
  .face-center { clip-path: polygon(25% 50%, 75% 50%, 50% 100%); background: #fdf8ec; }
  .face-top    { clip-path: polygon(50% 0%, 25% 50%, 75% 50%);   background: #fef3dc; }
  .face-left   { clip-path: polygon(25% 50%, 0% 100%, 50% 100%); background: #f5f0e0; }
  .face-right  { clip-path: polygon(75% 50%, 100% 100%, 50% 100%); background: #faf5e5; }

  .face-content { 
    position: absolute; 
    text-align: center; 
    color: #1a1a1a; 
    font-family: 'Inter', sans-serif; 
    line-height: 1.35;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  /* Centered positioning inside each triangular region */
  .face-center .face-content { top: 67%; left: 50%; transform: translate(-50%, -50%); width: 50mm; }
  .face-top    .face-content { top: 33%; left: 50%; transform: translate(-50%, -50%) rotate(180deg); width: 48mm; }
  .face-left   .face-content { top: 83%; left: 25%; transform: translate(-50%, -50%) rotate(60deg); width: 44mm; }
  .face-right  .face-content { top: 83%; left: 75%; transform: translate(-50%, -50%) rotate(-60deg); width: 44mm; }

  .face-title { 
    font-family: 'Outfit', sans-serif; 
    font-size: 7pt; 
    font-weight: 700; 
    text-transform: uppercase; 
    letter-spacing: 0.12em; 
    margin-bottom: 1.5mm; 
    padding-bottom: 1mm; 
    border-bottom: 0.3mm solid #c9a84c; 
    width: 100%;
    text-align: center;
  }
  .face-center .face-title { 
    font-size: 9.5pt; 
    border-bottom: none; 
    padding-bottom: 0; 
    margin-bottom: 0.8mm; 
    letter-spacing: 0.06em; 
  }
  .face-subtitle { font-size: 5.5pt; color: #555; margin-bottom: 1mm; width: 100%; text-align: center; }
  .face-domain { 
    font-family: 'JetBrains Mono', monospace; 
    font-size: 5pt; 
    color: #9a7d30; 
    margin-bottom: 1mm; 
    width: 100%;
    text-align: center;
  }
  .face-contact { font-size: 4.5pt; color: #666; line-height: 1.4; width: 100%; text-align: center; }
  
  .face-item { font-size: 4.5pt; margin-bottom: 1mm; width: 100%; text-align: center; }
  .face-item:last-child { margin-bottom: 0; }
  .face-item strong { display: block; font-size: 5pt; color: #1a1a1a; }
  .face-item span { color: #666; font-size: 4pt; }
  
  .face-skills-wrap { display: flex; flex-direction: column; gap: 0.6mm; width: 100%; align-items: center; }
  .face-skill-group { font-size: 4.2pt; color: #444; width: 100%; text-align: center; }
  .face-skill-group strong { color: #1a1a1a; font-weight: 600; }

  .origami-guides { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    pointer-events: none; 
    z-index: 10; 
  }
  
  .print-footer { 
    margin-top: 5mm; 
    text-align: center; 
    font-size: 6pt; 
    color: #888; 
  }
  .print-footer .legend { 
    display: flex; 
    justify-content: center; 
    gap: 6mm; 
    margin-top: 1.5mm; 
  }
  .print-footer .legend-item { 
    display: flex; 
    align-items: center; 
    gap: 2mm; 
  }
  .legend-line-solid { 
    width: 10mm; 
    height: 0; 
    border-top: 0.5mm solid #333; 
  }
  .legend-line-dashed { 
    width: 10mm; 
    height: 0; 
    border-top: 0.5mm dashed #888; 
  }
}
</style>