<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="mx-0 mt-1">
      <v-col cols="8" class="text-left">
        <v-btn text to="/my-ads">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4" class="text-right">
        <v-btn small fab style="background: #f9a825">
          <v-icon color="white">mdi-heart-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <v-img :src="ad.image" aspect-ratio="1.7" contain></v-img>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <h2>{{ ad.title }}</h2>
        <p>{{ prettyDate }}</p>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <h4>{{ ad.location }}</h4>
        <h4 color="#f9a825">45€</h4>
      </v-col>
    </v-row>

    <v-row align="center" justify="center" class="mx-0">
      <v-col cols="12">
        <p>{{ ad.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from '~/plugins/axios'
import moment from 'moment'
export default {
  data() {
    return {
      ad: []
    }
  },
  computed: {
    prettyDate() {
      return moment(this.ad.created).format('MMM Do YYYY')
    }
  },
  async created() {
    const actualID = this.$route.params.id
    const ad = (await axios.get('/ads/' + actualID)).data
    this.ad = ad
    console.log({ ad })
  }
}
</script>

<style scoped></style>
