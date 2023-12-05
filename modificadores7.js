const app = Vue.createApp({
    data() {
      return {
        colorFondo : 0
      }
    },
    methods: {
      cambiarColor() {
        this.colorFondo += 50;
      }
    }
  })
  
  app.mount('#app')
  