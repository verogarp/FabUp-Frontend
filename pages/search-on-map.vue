<template>
  <div id="main" style="height: 100%">
    <GmapMap
      :center="{ lat: 28.0985309, lng: -15.4108321 }"
      :zoom="16.75"
      style="height: 100%;"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      }"
    >
      <GmapMarker
        :position="{ lat: 28.098418, lng: -15.412172 }"
        :clickable="true"
        @click="goToFirstAd"
      />
      <GmapMarker
        :position="{ lat: 28.0984154, lng: -15.414558 }"
        :clickable="true"
        @click="goToSecondAd"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  methods: {
    goToFirstAd() {
      this.$router.push('/ad/5df384cbcc1c290004c43fa4')
    },
    goToSecondAd() {
      this.$router.push('/ad/5df38696cc1c290004c43faa')
    }
  }
}
</script>
