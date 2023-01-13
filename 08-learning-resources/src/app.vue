<template>
  <my-header title="Learning Resources" />
  <my-learning-resources />
</template>

<script>
import MyHeader from "./components/layouts/my-header"
import MyLearningResources from "./components/learning-resources/my-learning-resources"

const application = {
  components: {
    MyHeader,
    MyLearningResources
  }
}

export default application
</script>
