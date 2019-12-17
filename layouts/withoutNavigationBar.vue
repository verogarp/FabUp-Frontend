<template>
  <v-app style="background: #f9a825">
    <v-content>
      <div v-if="spinnerState" class="spinner-overlay">
        <v-progress-circular
          :size="50"
          color="white"
          indeterminate
          absolute
          class="mx-auto align-self-center"
        ></v-progress-circular>
      </div>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['spinnerState'])
  }
}
</script>
<style lang="scss" scoped>
* {
  font-family: $fabup-text;
}

.spinner-overlay {
  background-color: rgba(255, 153, 0, 0.65);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 99999;
}
</style>
