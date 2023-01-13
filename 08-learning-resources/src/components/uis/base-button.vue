<template>
  <button :type="type" :class="mode">
    <slot />
  </button>
</template>

<script>
const component = {
  props: {
    type: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    }
  }
}

export default component
</script>
