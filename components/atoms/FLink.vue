<template>
  <v-flex class="fabup-center">
    <a @click="test">
      <slot></slot>
    </a>
  </v-flex>
</template>

<script>
export default {
  methods: {
    test() {
      alert('HA!')
    }
  }
}
</script>

<style lang="scss" scoped></style>
