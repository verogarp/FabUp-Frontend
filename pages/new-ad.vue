<template>
  <div id="main">
    <v-container class="fill-height">
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="2" class="text-left">
          <v-btn text>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="10" class="text-right">
          <h1 class="fabup-title-font display-1">Create ad</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <v-text-field label="Title" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <v-text-field label="Price" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <v-text-field label="Location" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <v-text-field label="Description" outlined></v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <input
            id="file"
            ref="file"
            name="file"
            type="file"
            multiple
            @change="handleFileUpload()"
          />
          <label for="file">
            <p large width="100%" tile color="primary">Choose file</p>
          </label>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <v-btn large width="100%" tile color="primary" @click="submitFile"
            >UPLOAD</v-btn
          >
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

      <v-row align="center" justify="center" no-gutters>
        <v-col cols="12">
          <v-btn large width="100%" tile color="primary">CREATE</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // https://serversideup.net/uploading-files-vuejs-axios/
  data() {
    return {
      file: ''
    }
  },
  methods: {
    submitFile() {
      let formData = new FormData()
      formData.append('file', this.file)
      axios
        .post('https://jsonplaceholder.typicode.com/photos', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function() {
          console.log('SUCCESS!!')
        })
        .catch(function() {
          console.log('FAILURE!!')
        })
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>

<style scoped lang="scss">
#file {
  visibility: hidden;
}
</style>
