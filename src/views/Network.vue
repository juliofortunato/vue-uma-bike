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

    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Map from '@/components/Map.vue'
import Sidebar from '@/components/Sidebar.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'Network',

  components: { Map, Sidebar, Spinner },

  data () {
    return {
      focusedStation: {
        id: null
      }
    }
  },

  computed: {
    ...mapState(['isLoading'])
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
