<template>
  <div class="landing">
    <Logo class="landing__logo" />

    <router-link
      class="landing__call-to-action"
      :to="{ name: 'network' }"
    >
      Ver estações
    </router-link>
  </div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: { Logo }
}
</script>

<style lang="scss">
.landing {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  &__logo {
    width: px-to-rem(500px);
  }

  &__call-to-action {
    padding-top: px-to-rem($default-font-size);
    padding-bottom: px-to-rem($default-font-size);
    width: px-to-rem(400px);
    font-weight: $bold-font-weight;
    font-size: px-to-rem($default-font-size * 1.5);
    color: $white;
    text-align: center;
    text-decoration: none;
    border: 0;
    border-radius: px-to-rem(5px);
    outline: 0;
    background-color: $primary-color;
    cursor: pointer;
  }
}
</style>
