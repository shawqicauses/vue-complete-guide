<template>
  <div>
    <friend-header />
    <friend-form />
    <friend-list />
  </div>
</template>
<script>
const application = {
  data() {
    return {
      friends: [
        {
          id: "Shawqi-00",
          name: "Shawqi Hatem",
          email: "me@shawqi.com",
          phone: "00970 598 182 008",
          favorite: true
        },
        {
          id: "B-08",
          name: "Shawqi's Best Friend",
          email: "friend@shawqi.com",
          phone: "00970 567 398 903",
          favorite: false
        },
        {
          id: "B-88",
          name: "Shawqi's Best Friend",
          email: "friend@shawqi.com",
          phone: "00970 567 398 903",
          favorite: false
        }
      ]
    }
  },
  provide() {
    return {
      friends: this.friends,
      insertFriend: this.insertFriend,
      toggleFavorite: this.toggleFavorite,
      deleteFriend: this.deleteFriend
    }
  },
  methods: {
    insertFriend(name, email, phone) {
      this.friends.push({
        id: new Date().toISOString(),
        name,
        email,
        phone,
        favorite: false
      })
    },
    toggleFavorite(id) {
      const friend = this.friends.find((element) => element.id === id)
      friend.favorite = !friend.favorite
    },
    deleteFriend(id) {
      const index = this.friends.findIndex((element) => element.id === id)
      this.friends.splice(index, index + 1)
    }
  }
}

export default application
</script>
