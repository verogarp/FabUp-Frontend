<template>
  <div id="main">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      title: 'Reboot Final Project',
      activeBtn: 1
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  methods: {
    logout() {
      this.$store.commit('clearToken')
    }
  }
}
</script>
<style lang="scss">
html,
body,
#main {
  height: 100vh;
}

* {
  font-family: $fabup-text;
}
</style>
