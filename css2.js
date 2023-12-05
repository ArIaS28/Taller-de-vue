const app = Vue.createApp({
    data() {
      return {
        images: [
          {url: 'img/itachi.jpg', sel: false},
          {url: 'img/pain.jpg', sel: false},
          {url: 'img/kurama.jpg', sel: false},
          {url: 'img/kakashi.jpg', sel: false},
          {url: 'img/hinata.jpg', sel: false},
          {url: 'img/tsunade.jpg', sel: false},
          {url: 'img/obito.jpg', sel: false}
        ]
      }
    },
    methods: {
      select(index) {
        this.images[index].sel = !this.images[index].sel
      }
    }
  })
  
  app.mount('#app')
  