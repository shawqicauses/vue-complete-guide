<template>
  <base-card>
    <base-button
      type="button"
      :mode="listButtonMode"
      @click="selectComponent('learning-resources-list')">
      Learning Resources
    </base-button>
    <base-button
      type="button"
      :mode="formButtonMode"
      @click="selectComponent('learning-resources-form')">
      Insert Learning Resources
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="componentSelected" />
  </keep-alive>
</template>

<script>
import LearningResourcesForm from "./learning-resources-form"
import LearningResourcesList from "./learning-resources-list"

const component = {
  components: {
    LearningResourcesList,
    LearningResourcesForm
  },
  provide() {
    return {
      learningResources: this.learningResources,
      insertLearningResources: this.insertLearningResources,
      removeLearningResources: this.removeLearningResources
    }
  },
  data() {
    return {
      component: "learning-resources-list",
      learningResources: [
        {
          id: "vue-official-guide",
          title: "Vue.JS Official Guide",
          description: "The official guide for Vue.JS framework",
          link: "https://vuejs.org"
        }
      ]
    }
  },
  computed: {
    listButtonMode() {
      return this.componentSelected === "learning-resources-list"
        ? "primary"
        : "secondary"
    },
    formButtonMode() {
      return this.componentSelected === "learning-resources-form"
        ? "primary"
        : "secondary"
    }
  },
  methods: {
    selectComponent(componentSelected) {
      this.componentSelected = componentSelected
    },
    insertLearningResources(title, url, description) {
      this.componentSelected = "learning-resources-list"
      this.learningResources.unshift({
        id: new Date().toISOString(),
        title,
        url,
        description
      })
    },
    removeLearningResources(id) {
      this.learningResources.splice(
        this.learningResources.findIndex(
          (learningResource) => learningResource.id === id
        ),
        1
      )
    }
  }
}

export default component
</script>
