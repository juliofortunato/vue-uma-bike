<template>
  <div class="station">
    <h3 class="station__name">{{ station.name }}</h3>

    <address class="station__address">
      {{ station.address }}
    </address>

    <footer class="station__info">
      <p class="station__numbers">
        <img class="station__icon" src="@/assets/images/bicycle.svg">
        <span class="station__icon-label">
          {{ station.bikes }}/{{ station.slots }}
        </span>
      </p>
      <p class="station__status station__status--active" v-if="station.active">
        <img class="station__icon" src="@/assets/images/active.svg">
        <span class="station__icon-label">
          Ativa
        </span>
      </p>
      <p class="station__status station__status--active" v-else>
        <img class="station__icon" src="@/assets/images/inactive.svg">
        <span class="station__icon-label station__icon-label--inactive">
          Inativa
        </span>
      </p>
    </footer>
  </div>
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
      margin-top: 0;
      margin-bottom: px-to-rem(10px);
      font-size: px-to-rem(16px);
      color: $primary-color;
    }

    &__address {
      margin-bottom: px-to-rem(20px);
      font-size: px-to-rem(14px);
      font-style: normal;
    }

    &__info {
      display: flex;
      justify-content: space-between;
    }

    &__numbers,
    &__status {
      margin: 0;
      font-weight: $bold-font-weight;
      display: flex;
      align-items: center;
    }

    &__status {
      text-transform: uppercase;

      &--active {
        color: $primary-color;
      }
    }

    &__icon {
      height: px-to-rem(20px);
      margin-right: px-to-rem(5px);

    }

    &__icon-label {
      line-height: 1.1;

      &--inactive {
        color: $secondary-color;
      }
    }
  }
</style>
