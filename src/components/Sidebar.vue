<template>
  <div class="sidebar">
    <Logo class="sidebar__item sidebar__logo" />
    <Filters class="sidebar__item" />
    <StationList class="sidebar__item" :stations="stations" />
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Filters from '@/components/Filters'
import StationList from '@/components/StationList'

export default {
  props: ['stations'],

  components: {
    Logo,
    Filters,
    StationList
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
