const HIEROGLYPHS = '𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓁀𓁁𓁂𓁃𓁄𓁅𓁆𓂀𓂁𓂂𓃀𓃁𓃂𓃃𓃄𓄀𓄁𓄂𓅀𓅁𓅂𓆀𓆁𓆂𓇀𓇁𓇂𓈀𓈁𓈂𓉀𓉁𓊀𓊁𓋀𓋁𓌀𓌁𓍀𓍁𓎀𓎁𓏀𓏁'

function getRandomHieroglyph(): string {
  return HIEROGLYPHS[Math.floor(Math.random() * HIEROGLYPHS.length)]
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('hieratic', {
    mounted(el: HTMLElement, binding) {
      const originalText = el.textContent || ''
      const duration = binding.modifiers.slow ? 3000 : binding.modifiers.fast ? 800 : 1500
      const chars = originalText.split('')
      const resolved = new Array(chars.length).fill(false)

      // Initially show hieroglyphs
      el.textContent = ''
      const spans: HTMLSpanElement[] = chars.map((char, i) => {
        const span = document.createElement('span')
        span.className = 'hieratic-char decrypting'
        span.textContent = char === ' ' ? ' ' : getRandomHieroglyph()
        span.dataset.original = char
        span.dataset.index = String(i)
        el.appendChild(span)
        return span
      })

      // Scramble interval - keep changing unresolved chars
      const scrambleInterval = setInterval(() => {
        spans.forEach((span, i) => {
          if (!resolved[i] && chars[i] !== ' ') {
            span.textContent = getRandomHieroglyph()
          }
        })
      }, 50)

      // Resolve characters one by one with cascade
      const perChar = duration / chars.length
      chars.forEach((char, i) => {
        setTimeout(() => {
          resolved[i] = true
          spans[i].textContent = char
          spans[i].classList.remove('decrypting')
          spans[i].classList.add('resolved')
        }, perChar * i)
      })

      // Cleanup
      setTimeout(() => {
        clearInterval(scrambleInterval)
        el.textContent = originalText
      }, duration + 100)
    }
  })
})
