const application = Vue.createApp({
  data() {
    return {
      firstCompleteGuideGoal: "Finish Vue.JS Complete Guide",
      secondCompleteGuideGoal: "<b>Master Vue.JS - Build Web Applications</b>",
      vueJSLink: "https://vuejs.org"
    }
  },
  methods: {
    displayGoal() {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) return this.firstCompleteGuideGoal
      return this.secondCompleteGuideGoal
    }
  }
})

application.mount("#goals-user")
