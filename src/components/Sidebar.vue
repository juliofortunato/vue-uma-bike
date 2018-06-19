<template>
  <div class="sidebar">
    <Logo class="sidebar__item sidebar__logo" />
    <Filters class="sidebar__item" />
    <StationList class="sidebar__item" />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Filters from '@/components/Filters.vue'
import StationList from '@/components/StationList.vue'

export default {
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

    &__item {
      &:not(:last-child) {
        margin-bottom: px-to-rem(40px);
      }
    }

    &__logo {
      width: px-to-rem(280px);
    }
  }
</style>
