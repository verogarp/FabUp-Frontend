<template>
  <div id="main">
    <v-container class="fill-height mt-1">
      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="2" class="text-left">
          <v-btn text to="/my-ads">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10" class="text-right">
          <h1 class="fabup-title-font display-1">Create ad</h1>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-text-field
            v-model="title"
            label="Title"
            outlined
            validate-on-blur
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-text-field
            v-model="price"
            label="Price"
            outlined
            validate-on-blur
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-text-field
            v-model="location"
            label="Location"
            outlined
            validate-on-blur
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-text-field
            v-model="description"
            label="Description"
            outlined
            validate-on-blur
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <input
            id="file"
            ref="file"
            name="file"
            type="file"
            @change="handleFileUpload"
          />
          <label for="file">
            <v-alert type="warning" icon="mdi-image-plus" color="#f9a825"
              >UPLOAD PHOTO</v-alert
            >
          </label>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col cols="12">
          <v-overflow-btn
            class="my-2"
            :items="dropdown_font"
            label="Overflow Btn"
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-col>
      </v-row>-->

      <v-row align="center" justify="center" class="mx-0">
        <v-col cols="12">
          <v-btn large width="100%" tile color="primary" @click="postAd"
            >POST AD</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  // https://serversideup.net/uploading-files-vuejs-axios/
  data() {
    return {
      file: '',
      title: '',
      price: '',
      location: '',
      description: '',
      rules: {
        required: v => !!v || 'Item is required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    handleFileUpload() {
      // When selecting images, convert to Base64 string
      const reader = new FileReader() // A FileReader is used to convert into different formats
      reader.onloadend = () => {
        this.file = reader.result // If it finishes loading, we push the result into the `files` array
      }
      reader.onerror = Promise.reject // If not, we throw an error
      reader.readAsDataURL(this.$refs.file.files[0]) //  We tell the reader to convert the image into the base64 string
    },
    async postAd() {
      try {
        const ad = {
          title: this.title,
          price: this.price,
          // location: [this.location],
          description: this.description,
          image: this.file
        }
        await axios.post('ads/create', ad)
      } catch (e) {
        console.error(e.response.data.message)
      }
    }
  }
}
</script>

<style scoped lang="scss">
#file {
  visibility: hidden;
}
</style>
