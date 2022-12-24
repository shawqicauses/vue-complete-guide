<template>
  <li>
    <h3>{{ name }} {{ favorite ? " - (Favorite)" : null }}</h3>
    <button type="button" @click="toggleFavorite(id)">
      {{ favorite ? "Make Not" : "Make" }} Favorite
    </button>
    <button type="button" @click="toggleDetailsVisibility">
      {{ detailsVisibility ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsVisibility">
      <li>
        <strong>Phone Number:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <button type="button" @click="deleteFriend(id)">Delete</button>
  </li>
</template>

<script>
const component = {
  inject: ["toggleFavorite", "deleteFriend"],
  props: {
    id: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    favorite: {type: Boolean, required: true, default: false}
  },
  data() {
    return {
      detailsVisibility: true
    }
  },
  methods: {
    toggleDetailsVisibility() {
      this.detailsVisibility = !this.detailsVisibility
    }
  }
}

export default component
</script>
