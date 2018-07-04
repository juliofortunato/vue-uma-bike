<template>
  <div class="station-list">
    <Station
      class="station-list__item"
      v-for="station in stations"
      :key="station.id"
      :station="station"
    />
  </div>
</template>

<script>
import Station from '@/components/Station'

export default {
  props: ['stations'],

  components: { Station }
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
