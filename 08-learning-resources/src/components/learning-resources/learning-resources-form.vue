<template>
  <base-dialog
    v-if="inputIsInValid"
    title="In-valid Input"
    @close-dialog="confirmError">
    <template #default>
      <p>Unfortunately. At lease one input value is in-valid.</p>
      <p>
        Please check every input and make sure you entered at least a few
        characters in every input fields. Thank you!
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay!</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitLearningResources">
      <div class="form-control">
        <label for="learning-resources-title">Title</label>
        <input
          id="learning-resources-title"
          ref="titleInput"
          type="text"
          name="learning-resources-title"
          placeholder="Why JavaScript is awesome" />
      </div>
      <div class="form-control">
        <label for="learning-resources-url">Link</label>
        <input
          id="learning-resources-url"
          ref="urlInput"
          type="url"
          name="learning-resources-url"
          placeholder="https://google.com" />
      </div>
      <div class="form-control">
        <label for="learning-resources-description">Description</label>
        <textarea
          id="learning-resources-description"
          ref="descriptionInput"
          name="learning-resources-description"
          rows="10"
          placeholder="JavaScript is awesome because of ..."></textarea>
      </div>
      <base-button type="submit" mode="default">Insert</base-button>
    </form>
  </base-card>
</template>

<script>
const component = {
  inject: ["insertLearningResources"],
  data() {
    return {
      inputIsInValid: false
    }
  },
  methods: {
    submitLearningResources() {
      const title = this.$refs.titleInput.value
      const url = this.$refs.urlInput.value
      const description = this.$refs.descriptionInput.value
      if (title.trim() === "" || url.trim === "" || description.trim()) {
        this.inputIsInValid = true
        return
      }

      insertLearningResources(title, url, description)
    },
    confirmError() {
      this.inputIsInValid = false
    }
  }
}

export default component
</script>
