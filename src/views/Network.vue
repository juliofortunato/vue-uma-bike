<template>
  <div class="network">
    <Sidebar class="network__sidebar" :stations="stations" />

    <Map class="network__map" :stations="stations" />

    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { FETCH_STATIONS } from '@/store/actions/types'

import Sidebar from '@/components/Sidebar'
import Map from '@/components/Map'
import Spinner from '@/components/Spinner'

export default {
  components: {
    Sidebar,
    Map,
    Spinner
  },

  data () {
    return {
      stations: [
        {
          name: 'Ipiranga',
          id: 'dec31b0d60602ee928d914dd1ea70ed9',
          empty_slots: 9,
          free_bikes: 1,
          longitude: -47.50812,
          latitude: -23.50078,
          extra: {
            open: true
          }
        }
      ]
    }
  },

  computed: {
    ...mapState(['isLoading']),
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
