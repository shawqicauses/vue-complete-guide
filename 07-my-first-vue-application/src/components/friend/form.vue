<template>
  <form @submit.prevent="insertFriend(inputName, inputEmail, inputPhone)">
    <div>
      <label for="name">Name:</label>
      <input
        id="name"
        v-model="inputName"
        type="text"
        name="name"
        placeholder="Your Name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input
        id="email"
        v-model="inputEmail"
        type="email"
        name="email"
        placeholder="Your Email" />
    </div>
    <div>
      <label for="phone-number">Phone Number:</label>
      <input
        id="phone-number"
        v-model="inputPhone"
        type="tel"
        name="phone-number"
        placeholder="Your Phone Number" />
    </div>
    <button type="submit">Insert Friend</button>
  </form>
</template>

<script>
const component = {
  inject: ["insertFriend"],
  data() {
    return {
      inputName: null,
      inputEmail: null,
      inputPhone: null
    }
  }
}

export default component
</script>
