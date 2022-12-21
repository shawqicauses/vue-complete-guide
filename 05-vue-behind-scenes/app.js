/* eslint prefer-const: "off" */
/* eslint no-param-reassign: "off" */
/* eslint no-console: "off" */
/* eslint no-alert: "off" */

const application = Vue.createApp({
  data() {
    return {
      userInput: "",
      userMessage: "Vue Is Great!"
    }
  },
  methods: {
    saveUserInput(event) {
      this.userInput = event.target.value
    },
    insertUserInput() {
      this.userMessage = this.$refs.userInputElement.value
    }
  },
  beforeCreate() {
    console.log("beforeCreate() is executing ...")
  },
  created() {
    console.log("created() is executing ...")
  },
  beforeMount() {
    console.log("beforeMount() is executing ...")
  },
  mounted() {
    console.log("mounted() is executing ...")
  },
  beforeUpdate() {
    console.log("beforeUpdate() is executing ...")
  },
  updated() {
    console.log("updated() is executing ...")
  }
})

const secondApplication = Vue.createApp({
  /* template: "<p>{{ favoriteTeam }}</p>" */
  data() {
    return {
      favoriteTeam: "Manchester United"
    }
  },
  beforeUnmount() {
    alert("beforeUnmount is executing ...")
  },
  unmounted() {
    alert("unmounted() is executing ...")
  }
})

application.mount("#vue-user")
secondApplication.mount("#second-application")
setTimeout(() => secondApplication.unmount("#second-application"), 2000)

// Vanilla JavaScript
let message = "Hello"
let myNewLongMessage = `${message} World!`
message = "Hi"
console.log(myNewLongMessage)

const data = {message: "Hello", myLongMessage: "Hello World"}
const handler = {
  set(target, key, value) {
    if (key === "message") target.myLongMessage = `${value} World`
  }
}

const proxy = new Proxy(data, handler)
proxy.message = "Hi"
console.log(proxy.myLongMessage)
