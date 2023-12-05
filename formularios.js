const app = Vue.createApp({
    data() {
      return {
        nombreArticulo: null,
        cantidadArticulo: null,
        listaCompras: [
          { nombre: 'Tomates', cantidad: 5 }
        ]
      }
    },
    methods: {
      agregarItem(){
        let item = {
          nombre: this.nombreArticulo,
          cantidad: this.cantidadArticulo
        }
        this.listaCompras.push(item)
        this.nombreArticulo = null
        this.cantidadArticulo = null  
      }
    }
  })
  
  app.mount('#app')
  