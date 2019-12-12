<template>
  <div id="main">
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="mx-0">
        <v-col class="text-right" cols="12">
          <h1 class="fabup-title-font display-1">Search</h1>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-overflow-btn
            v-model="selectedCategory"
            class="my-2"
            :items="categories"
            item-text="category"
            item-value="_id"
            label="All Categories"
            target="#dropdown-example"
            @change="getByCategory"
          ></v-overflow-btn>
        </v-col>
      </v-row>

      <v-card
        v-for="ad in ads"
        :key="ad._id"
        class="mx-auto mt-4"
        width="100%"
        :to="`/ad/${ad._id}`"
      >
        <v-img class="white--text align-end" :src="ad.image"></v-img>
        <v-card-text class="text--primary">
          <v-row>
            <v-col cols="10">
              <h4>{{ ad.title }}</h4>
            </v-col>
            <v-col cols="2" class="text-right">{{ ad.price }}€</v-col>
          </v-row>
          <div>{{ ad.location }}</div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  data() {
    return {
      ads: [],
      categories: [],
      selectedCategory: ''
    }
  },
  created() {
    axios
      .get('/ads')
      .then(res => res.data)
      .then(ads => {
        this.ads = ads
      })
  },
  mounted() {
    this.getAllCategories()
  },
  methods: {
    async getAllCategories() {
      const response = await axios.get('/categories')
      this.categories = response.data
    },
    async getByCategory() {
      const response = await axios.get(
        `/ads/search?category=${this.selectedCategory}`
      )
      this.ads = response.data
    }
  }
}
</script>
