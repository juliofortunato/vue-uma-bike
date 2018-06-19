<template>
  <div class="network">
    <Sidebar class="network__sidebar" />
    <Map class="network__map" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: { Map, Sidebar }
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
