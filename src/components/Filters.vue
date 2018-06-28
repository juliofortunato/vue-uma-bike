<template>
  <div>
    <div class="filter" v-for="filter in filters" :key="filter.id">
      <input
        class="filter__checkbox"
        type="checkbox"
        :id="filter.id"
        :value="filter.id"
        v-model="selectedFilters"
      />

      <label
        class="filter__label"
        :for="filter.id"
      >
        {{ filter.label }}
      </label>
    </div>
  </div>
</template>

<script>
import { SET_FILTERS } from '@/store/actions/types'

export default {
  data () {
    return {
      filters: [
        {
          id: 'bikesAvailable',
          label: 'Só estações com bike'
        },
        {
          id: 'slotsAvailable',
          label: 'Só estações com vagas'
        },
        {
          id: 'onlyActives',
          label: 'Só estações ativas'
        }
      ],

      selectedFilters: []
    }
  },

  watch: {
    selectedFilters (filters) {
      this.$store.dispatch(SET_FILTERS, filters)
    }
  }
}
</script>

<style lang="scss">
  $toogle-background: linear-gradient(to right, $primary-color 50%, $secondary-color 50%);

  .filter {
    position: relative;
    padding-left: px-to-rem(60px);

    &:not(:last-child) {
      margin-bottom: px-to-rem(10px);
    }

    &__label {
      margin-left: 5px;
      font-weight: $bold-font-weight;
      font-size: px-to-rem(14px);
      color: $secondary-color;
      text-transform: uppercase;
      line-height: 2;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        height: px-to-rem(25px);
        left: 0;
        background-image: $toogle-background;
        background-size: 200%;
        background-position-x: right;
        width: px-to-rem(50px);
        border-radius: px-to-rem(100px);
        transition: background .3s linear;
      }

      &::after {
        content: '';
        position: absolute;
        height: px-to-rem(19px);
        width: px-to-rem(19px);
        left: px-to-rem(3px);
        top: px-to-rem(3px);
        background-color: $white;
        border-radius: 100%;
        transition: transform .35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }

    &__checkbox:checked + &__label {
      &::after {
        transform: translateX(px-to-rem(25px));
      }

      &::before {
        background-color: $primary-color;
        background-position-x: left;
      }
    }

    &__checkbox {
      position: absolute;
      left: -100%;
    }
  }
</style>
