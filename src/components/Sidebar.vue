<template>
  <div>
    <span>Sidebar</span>
  </div>
</template>

<script>
export default {}
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
