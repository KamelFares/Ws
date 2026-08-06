export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('hieratic', {
    mounted(el: HTMLElement) {
      // No scrambling animation, load text instantly as clean English
    }
  })
})
