<template>
  <component
    :is="tag"
    class="display-2 v-heading mb-3 font-weight-light"
    color="primary"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'BaseHeading',

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style lang="sass">
  .v-heading
    letter-spacing: 5px !important
</style>
