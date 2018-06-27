<template>
  <gmap-map
    :center="{ lat: -23.5015, lng: -47.4526 }"
    :zoom="13"
    :options="{disableDefaultUI: true}"
  >
    <gmap-marker
      :key="station.id"
      v-for="station in stations"
      :position="{ lat: station.latitude, lng: station.longitude }"
      :clickable="true"
      :icon="{scaledSize: {width: 50, height: 50 }, url: 'https://i1.wp.com/www.bikeswelcome.org/wp-content/uploads/2016/12/bike_map_marker_225-Icon.png'}"
      @click="onStationClick(station)"
    />
</gmap-map>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['onStationClick'],

  computed: {
    ...mapState(['stations'])
  }
}
</script>
