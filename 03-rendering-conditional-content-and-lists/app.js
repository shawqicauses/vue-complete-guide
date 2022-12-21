const application = Vue.createApp({
  data() {
    return {
      goals: [],
      goalsInputValue: ""
    }
  },
  methods: {
    insertGoal() {
      this.goals.push(this.goalsInputValue)
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
})

application.mount("#goals-user")
