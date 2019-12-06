<template>
  <v-container>
    <v-row>
      <v-col>
        <slot name="upper"></slot>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <slot name="mid"></slot>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <slot name="lower"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {}
}
</script>
<style lang="stylus"></style>
