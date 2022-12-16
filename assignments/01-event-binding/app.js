Vue.createApp({
  data() {
    return {
      inputValue: "",
      displayInputValue: ""
    }
  },
  methods: {
    displayAlert(event) {
      alert("Alert Displayed Successfully")
    },
    updateInput(event) {
      this.inputValue = event.target.value
    },
    updateDisplayInput(event) {
      this.displayInputValue = event.target.value
    }
  }
}).mount("#assignment-container")
