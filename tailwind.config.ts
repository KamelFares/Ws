import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        'accent-dim': 'var(--accent-dim)',
        surface: {
          DEFAULT: 'var(--bg)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-elevated)'
        }
      },
      animation: {
        'card-glow': 'card-glow 2s ease-in-out infinite',
        'energy-pulse': 'energy-pulse var(--energy-duration, 3s) ease-in-out infinite',
        'lp-pulse': 'lp-pulse 1.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
