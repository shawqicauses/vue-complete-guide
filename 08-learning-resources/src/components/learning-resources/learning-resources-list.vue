<template>
  <ul>
    <learning-resources-item
      v-for="learningResource in learningResources"
      :id="learningResource.id"
      :key="learningResource.id"
      :title="learningResource.title"
      :description="learningResource.description"
      :link="learningResource.link" />
  </ul>
</template>

<script>
import LearningResourcesItem from "./learning-resources-item"
const component = {
  inject: {learningResources: {type: String, required: true}},
  components: {LearningResourcesItem}
}

export default component
</script>
