const app = Vue.createApp({
    data() {
      return {
        valorTecla: ''
      }
    },
    methods: {
      obtenerTecla(evt) {
        this.valorTecla = evt.key
        console.log(evt.key)
      }
    }
  })
  
  app.mount('#app')
  