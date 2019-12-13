<template>
  <div>
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12" class="text-right">
          <h1 class="fabup-title-font display-1">Profile</h1>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12" class="text-center">
          <v-img
            :src="userPhoto"
            alt="profileImage"
            max-width="300"
            max-height="250"
          />
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="2" class="text-right">
          <v-icon>mdi-account</v-icon>
        </v-col>
        <v-col cols="10">
          <h3 class="subtitle-1">{{ userName }}</h3>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="2" class="text-right">
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-col>
        <v-col cols="10">
          <h3 class="subtitle-1">{{ userLocation }}</h3>
        </v-col>
      </v-row>

      <!-- <v-btn
        fab
        style="background: #f9a825"
        to="/edit-profile"
        absolute
        bottom
        right
        fixed
        class="mb-12"
      >
        <v-icon color="white">mdi-pen</v-icon>
      </v-btn>-->
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      ads: null
    }
  },

  computed: {
    ...mapGetters(['token', 'userName', 'userLocation', 'userPhoto'])
  },
  async mounted() {
    setTimeout(() => {
      if (!this.token) {
        this.$router.push('/auth')
      }
    }, 0)
  }
}
</script>

<style scoped lang="scss"></style>
