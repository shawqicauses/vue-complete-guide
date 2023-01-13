<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
const component = {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}

export default component
</script>
