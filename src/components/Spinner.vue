<template>
  <div class="spinner" />
</template>

<style lang="scss">
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($black, .6);

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: px-to-rem(100px);
      height: px-to-rem(100px);
      border-radius: 100%;
      border-width: px-to-rem(10px);
      border-color: transparent;
      border-style: solid;
    }

    &::before {
      animation-name: spin;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      border-color: transparent;
      border-top-color: $white;
      border-bottom-color: $white;
    }

    &::after {
      border-color: rgba($white, .2);
    }
  }
</style>
