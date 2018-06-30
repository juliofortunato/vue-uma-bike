<template>
  <div class="network">
    <Sidebar
      class="network__sidebar"
      :focusedStation="focusedStation"
    />

    <Map
      class="network__map"
      :onStationClick="onStationClick"
    />

    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { FETCH_STATIONS, FOCUS_ON_STATION } from '@/store/actions/types'

import Map from '@/components/Map.vue'
import Sidebar from '@/components/Sidebar.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'Network',

  components: { Map, Sidebar, Spinner },

  computed: {
    ...mapState([
      'isLoading',
      'focusedStation'
    ])
  },

  methods: {
    onStationClick (station) {
      this.$store.dispatch(FOCUS_ON_STATION, station)
    }
  },

  created () {
    this.$store.dispatch(FETCH_STATIONS)
  }
}
</script>

<style lang="scss">
  .network {
    display: flex;
    height: 100%;

    &__sidebar {
      flex-basis: 30%;
    }

    &__map {
      flex-grow: 1;
    }
  }
</style>
