Vue.createApp({
  data() {
    return {
      goals: [],
      goalsInputValue: ""
    }
  },
  methods: {
    goalsInsert() {
      if (this.goalsInputValue) this.goals.push(this.goalsInputValue)
      this.goalsInputValue = ""
    }
  }
}).mount("#goals-container")
