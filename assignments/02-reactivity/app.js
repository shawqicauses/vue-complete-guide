Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        this.counter = 0
      }, 5000)
    }
  },
  computed: {
    result() {
      if (this.counter < 37) return "Not There Yet!"
      if (this.counter > 37) return "Too Much!"
      if (this.counter === 37) return this.counter
    }
  },
  methods: {
    increase(number) {
      this.counter += number
    }
  }
}).mount("#assignment-container")
