<template>
  <div class="network">
    <Sidebar
      class="network__sidebar"
      :focusedStation="focusedStation"
    />

    <Map
      class="network__map"
      :onStationClick="fuckingMethod"
    />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: { Map, Sidebar },

  data () {
    return {
      focusedStation: {
        id: null
      }
    }
  },

  methods: {
    fuckingMethod (station) {
      this.focusedStation = station
    }
  }
}
</script>

<style lang="scss">
  .network {
    display: flex;
    height: 100%;

    &__sidebar {
      flex-basis: 25%;
    }

    &__map {
      flex-grow: 1;
    }
  }
</style>
