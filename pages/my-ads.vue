<template>
  <div id="main">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="3" class="text-right">
          <v-btn text>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col class="text-center" cols="6">
          <h1 class="fabup-title-font display-1">My Ads</h1>
        </v-col>
        <v-col cols="3" class="text-right">
          <v-btn fab style="background: #f9a825" to="/new-ad">
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-card class="mx-auto" max-width="300">
        <v-img
          class="white--text align-end"
          height="150px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>
        <v-card-text class="text--primary">
          <v-row>
            <v-col cols="10">
              <div>Best makeup for weeding</div>
            </v-col>
            <v-col cols="2" class="text-right">35€</v-col>
          </v-row>
          <div>Las Palmas de Gran Canaria</div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
