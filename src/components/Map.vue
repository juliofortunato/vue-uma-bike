<template>
  <gmap-map
    :center="{ lat: -23.486871, lng: -47.465262 }"
    :zoom="13"
    :options="{disableDefaultUI: true}"
  >
    <gmap-marker
      :key="station.id"
      v-for="station in stations"
      :position="{ lat: station.latitude, lng: station.longitude }"
      :clickable="true"
      :icon="{scaledSize: {width: 50, height: 65 }, url: 'https://user-images.githubusercontent.com/5838414/42012344-127674ee-7a6e-11e8-9b4d-27ad577d23ba.png'}"
      @click="onStationClick(station)"
    />
</gmap-map>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['onStationClick'],

  computed: {
    ...mapGetters(['stations'])
  }
}
</script>
