<template>
  <section class="station" :class="{ 'station--focused': false }">
    <h3 class="station__name">
      {{ station.name }}

      <img v-if="station.extra.open" class="station__icon" src="@/assets/images/active.svg" />
      <img v-else class="station__icon" src="@/assets/images/inactive.svg" />
    </h3>

    <section class="station__info">
      <img class="station__icon station__icon--bike" src="@/assets/images/bicycle.svg" />

      <div class="station__stats">
        <span class="station__number">{{ station.free_bikes }}</span>
        <span class="station__label">Bikes</span>
      </div>

      <div class="station__stats">
        <span class="station__number">{{ station.empty_slots }}</span>
        <span class="station__label">Slots</span>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ['station']
}
</script>

<style lang="scss">
  .station {
    padding: px-to-rem(16px);
    background-color: $white;
    box-shadow: px-to-rem(1px) px-to-rem(3px) px-to-rem(3px) rgba($black,.15);
    color: $secondary-color;

    &__name {
      display: flex;
      justify-content: space-between;
      margin-top: 0;
      margin-bottom: px-to-rem(10px);
      font-size: px-to-rem(30px);
      color: $primary-color;
    }

    &__icon {
      height: px-to-rem(30px);

      &--bike {
        height: px-to-rem(45px);
      }
    }

    &__info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: px-to-rem(20px);
    }

    &__stats {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__divider {
      align-self: stretch;
      width: px-to-rem(2px);
      background-color: $secondary-color;
    }

    &__number {
      font-size: px-to-rem(36px);
      font-weight: $bold-font-weight;
    }

    &__label {
      text-transform: uppercase;
      font-weight: $bold-font-weight;
      color: $gray;
    }

    &--focused {
      box-shadow: 2px 2px 10px $primary-color;
    }
  }
</style>
