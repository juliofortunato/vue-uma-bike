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
      stations: [
        {
          name: 'Estação Campolim',
          address: 'Av. Antônio Carlos Comitre, 1393 Parque Campolim',
          bikes: 2,
          slots: 6,
          active: true
        },
        {
          name: 'Parque Kasato Maru',
          address: 'Av. Antônio Carlos Comitre, 200 Parque Campolim',
          bikes: 6,
          slots: 6,
          active: false
        }
      ]
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
