<template>
  <div id="sidebar" class="sidebar">
    <Logo class="sidebar__item sidebar__logo" />
    <Filters class="sidebar__item" />
    <StationList class="sidebar__item" :focusedStationId="focusedStation.id" />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Filters from '@/components/Filters.vue'
import StationList from '@/components/StationList.vue'

export default {
  props: ['focusedStation'],

  components: {
    Logo,
    Filters,
    StationList
  },

  watch: {
    focusedStation (station) {
      if (this.focusedStation) {
        const element = `[id='${this.focusedStation.id}']`
        const options = {
          container: '#sidebar',
          easing: 'ease-in',
          offset: -50
        }

        this.$scrollTo(element, 500, options)
      }
    }
  }
}
</script>

<style lang="scss">
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: px-to-rem(20px);
    border-right-color: $gray;
    border-right-width: px-to-rem(3px);
    border-right-style: solid;
    background-color: $sidebar-color;
    overflow-y: auto;

    &__item {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: px-to-rem(40px);
      }
    }

    &__logo {
      width: px-to-rem(180px);
    }
  }
</style>
