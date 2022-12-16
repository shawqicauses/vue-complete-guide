Vue.createApp({
  data() {
    return {
      goals: [],
      goalsInputValue: ""
    }
  },
  methods: {
    goalsInsert() {
      this.goals.push(this.goalsInputValue)
    }
  }
}).mount("#goals-container")
document
  .querySelector("form")
  .addEventListener("submit", (event) => event.preventDefault())
