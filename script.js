new Vue({
  el: '#app',
  data: {
      active: 0,
      animation: 'fadeUp',
      previous: 0,
      className: ''
  },
  methods: {
      selectedContent(index) {
          this.active = index;

          if(index > this.previous) {
              this.animation = 'fadeUp';
          }

          if(index < this.previous) {
              this.animation = 'fadeDown';
          }

          this.previous = index;

          if(index === 1) {
              this.className = 'activeSecond'
          } else if(index === 2) {
              this.className = 'activeThirst'
          } else {
              this.className = ''
          }
      }
  }
})