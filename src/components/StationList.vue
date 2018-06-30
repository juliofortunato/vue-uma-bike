<template>
  <div class="station-list">
    <Station
      class="station-list__item"
      v-for="station in stations"
      :isFocused="isStationFocused(station)"
      :key="station.name"
      :station="station"
      :id="station.id"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Station from '@/components/Station.vue'

export default {
  components: { Station },

  props: ['focusedStationId'],

  methods: {
    isStationFocused (station) {
      return station.id === this.focusedStationId
    }
  },

  computed: {
    ...mapGetters(['stations'])
  }
}
</script>

<style lang="scss">
  .station-list {
    display: flex;
    flex-direction: column;

    &__item {
      &:not(:last-child) {
        margin-bottom: px-to-rem(10px);
      }

      &:last-child {
        margin-bottom: px-to-rem(20px);
      }
    }
  }
</style>
