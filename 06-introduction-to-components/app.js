const application = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Shawqi-00",
          name: "Shawqi Hatem",
          email: "shawqicauses@outlook.com",
          phone: "00970 598 182 008"
        },
        {
          id: "B-08",
          name: "Shawqi's Best Friend",
          email: "shawqi@friend.com",
          phone: "00970 567 398 903"
        }
      ]
    }
  }
})

application.component("friend-item", {
  data() {
    return {
      friend: {name: "Shawqi"},
      detailsVisibility: false
    }
  },
  methods: {
    toggleDetailsVisibility() {
      this.detailsVisibility = !this.detailsVisibility
    }
  },
  template: "<li>{{ friend.name }}</li>"
})

application.mount("#components-application")
