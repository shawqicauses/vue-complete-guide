<template>
  <ul>
    <friend-item
      v-for="friend in friends"
      :id="friend.id"
      :key="friend.id"
      :name="friend.name"
      :email="friend.email"
      :phone="friend.phone"
      :favorite="friend.favorite" />
  </ul>
</template>

<script>
const component = {inject: ["friends"]}
export default component
</script>
