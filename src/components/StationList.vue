<template>
  <div class="station-list">
    <Station
      class="station-list__item"
      v-for="station in stations"
      :key="station.name"
      :station="station"
    />
  </div>
</template>

<script>
import Station from '@/components/Station.vue'

export default {
  components: { Station },
  data () {
    return {
      stations: [ {
        empty_slots: 8,
        free_bikes: 3,
        extra: {
          open: true
        },
        id: 'dec31b0d60602ee928d914dd1ea70ed9',
        latitude: -23.50078,
        longitude: -47.50812,
        name: 'Ipiranga'
      }]
    }
  }
}
</script>

<style lang="scss">
  .station-list {
    display: flex;
    flex-direction: column;
    height: 100%;

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
