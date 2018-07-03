<template>
  <gmap-map
    :zoom="13"
    :center="mapCenter"
    :options="mapOptions"
  >
    <gmap-marker
      v-for="station in stations"
      :key="station.id"
      :position="{ lat: station.latitude, lng: station.longitude }"
      :icon="mapPin"
    />
  </gmap-map>
</template>

<script>
export default {
  props: ['stations'],

  data () {
    return {
      mapCenter: {
        lat: -23.486871,
        lng: -47.465262
      },

      mapOptions: {
        disableDefaultUI: true
      },

      mapPin: {
        url: 'https://user-images.githubusercontent.com/5838414/42012344-127674ee-7a6e-11e8-9b4d-27ad577d23ba.png',
        scaledSize: {
          width: 50,
          height: 65
        },
      }
    }
  }
}
</script>
