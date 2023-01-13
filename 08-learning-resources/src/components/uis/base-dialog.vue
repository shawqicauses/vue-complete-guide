<template>
  <teleport to="body">
    <div @click="$emit('close-dialog')" @keypress="$emit('close-dialog')" />
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot />
      </section>
      <menu>
        <slot name="action">
          <base-button @click="$emit('close-dialog')">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
const component = {
  props: {title: {type: String, default: "Dialog Header"}},
  emits: ["close-dialog"]
}

export default component
</script>
