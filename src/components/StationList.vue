<template>
  <div>
    <span>StationList</span>
  </div>
</template>

<script>
export default {}
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
