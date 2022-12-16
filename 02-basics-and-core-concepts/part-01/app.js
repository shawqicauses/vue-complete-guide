const application = Vue.createApp({
  data() {
    return {
      counter: 0,
      myName: "",
      displayName: ""
    }
  },
  watch: {
    counter(value) {
      if (value > 50)
        setTimeout(() => {
          this.counter = 0
        }, 2000)
    }
  },
  computed: {
    myFullName() {
      if (this.myName) return `${this.myName} Hatem`
    }
  },
  methods: {
    increment(number) {
      this.counter += number
    },
    decrement(number) {
      this.counter -= number
    },
    updateMyName(event) {
      this.myName = event.target.value
    },
    updateDisplayName() {
      this.displayName = this.myName
    },
    resetName() {
      this.myName = ""
      this.updateDisplayName()
    },
    submitForm(event) {
      /* eslint no-unused-vars: "off" */
      /* eslint no-alert: "off" */
      alert("Form Submission Done Successfully")
    }
  }
})

application.mount("#events-user")
