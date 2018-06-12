<template>
  <div class="landing">

    <img class="landing__logo" src="@/assets/images/logo.svg" />

    <button class="landing__call-to-action">Ver estações</button>
  </div>
</template>

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
    width: px-to-rem(400px);
    height: px-to-rem(60px);
    font-weight: $bold-font-weight;
    font-size: px-to-rem($default-font-size * 1.5);
    border: 0;
    color: $white;
    border-radius: px-to-rem(5px);
    outline: 0;
    padding: 0;
    background-color: $primary-color;
    cursor: pointer;
  }
}
</style>
