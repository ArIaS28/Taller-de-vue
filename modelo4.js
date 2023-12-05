const app = Vue.createApp({
    data() {
      return {
        nombreArticulo: null,
        cantidadArticulo: null,
        articuloImportante: false,
        listaCompras: [
          { nombre: 'Tomates', cantidad: 5, importante: false, found: false },
          { nombre: 'Pan', cantidad: 1, importante: false, found: false },
          { nombre: 'Jabón', cantidad: 1, importante: true, found: true }
        ]
      }
    },
    methods: {
      agregarItem() {
        let item = {
          nombre: this.nombreArticulo,
          cantidad: this.cantidadArticulo,
          importante: this.articuloImportante,
          found: false
        }
        this.listaCompras.push(item)
        this.nombreArticulo = null
        this.cantidadArticulo = null
        this.articuloImportante = false
      }
    }
  })
  
  app.mount('#app')
  