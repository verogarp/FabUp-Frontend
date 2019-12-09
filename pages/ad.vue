<template>
  <div id="main">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="8" class="text-left">
          <v-btn text>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn fab style="background: #f9a825">
            <v-icon color="white">mdi-heart-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-carousel height="300" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center"></v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <h2>Best makeup of gran canaria</h2>
          <p>Created november 2019</p>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <h4>Las Palmas de Gran Canaria</h4>
          <h4 color="#f9a825">45€</h4>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <h4>
            I can cut your hair using a katana, as well as stylizing it with a
            mini-flamethrower. You will look very cool!
          </h4>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
    }
  }
}
</script>

<style scoped></style>
