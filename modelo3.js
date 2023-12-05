const app = Vue.createApp({
    data() {
      return {
        nombreArticulo: null,
        cantidadArticulo: null,
        articuloImportante: false,
        listaCompras: [
          { nombre: 'Tomates', cantidad: 5, importante: false }
        ]
      }
    },
    methods: {
      agregarItem() {
        let item = {
          nombre: this.nombreArticulo,
          cantidad: this.cantidadArticulo,
          importante: this.articuloImportante
        }
        this.listaCompras.push(item)
        this.nombreArticulo = null
        this.cantidadArticulo = null
        this.articuloImportante = false
      }
    }
  })
  
  app.mount('#app')
  