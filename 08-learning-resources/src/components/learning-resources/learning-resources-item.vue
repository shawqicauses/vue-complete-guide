<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button
          type="button"
          mode="secondary"
          @click="removeLearningResources(id)">
          Delete
        </base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="blank">View Learning Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
const component = {
  inject: ["removeLearningResources"],
  props: {
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    link: {type: String, required: true}
  }
}

export default component
</script>
