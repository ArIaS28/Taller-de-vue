const app = Vue.createApp({
    methods: {
      crearAlerta(evt) {
        if (evt.key === 'l' || evt.key === 'L') {
          if (evt.ctrlKey) {
            alert("¡Presionaste las teclas 'Ctrl' y 'L', en combinación!");
          }
        }
      }
    }
  })
  
  app.mount('#app')
  