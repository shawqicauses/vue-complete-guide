Vue.createApp({
  data() {
    return {
      myName: "Shawqi Hatem",
      myAge: 19,
      myFavoriteNumber: 0,
      myImageLink:
        "https://images.unsplash.com/photo-1671175300616-3f81d3786b60"
    }
  },
  methods: {
    generateMyFavoriteNumber() {
      const favoriteNumber = Math.random()
      this.myFavoriteNumber = favoriteNumber
      return favoriteNumber
    }
  }
}).mount("#assignment-container")
