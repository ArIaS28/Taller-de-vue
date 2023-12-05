const app = Vue.createApp({
    methods: {
      crearAlerta(evt) {
        if (evt.key === 'l' || evt.key === 'L') {
          alert("¡Presionaste la tecla 'L'!");
        }
      }
    }
  })
  
  app.mount('#app')
  