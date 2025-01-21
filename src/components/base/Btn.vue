<template>
  <v-btn
    color="primary"
    class="white--text text-capitalize font-weight-bold"
    rounded
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',
  }
</script>
