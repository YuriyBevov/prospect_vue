<template>
  <button
    class="portfolio__more main-btn"
    type="button"
    :disabled="this.$props.disabled ? true : false"
    @click="showMore"
  >
    <span>Больше работ</span>

    <svg v-svg
      symbol="icon-btn-arrow"
      size="0 0 24 24"
    ></svg>
  </button>
</template>

<script>
  export default {
    props: {
      disabled: Boolean
    },

    methods: {
      showMore() {
        this.$emit('load');
      }
    }
  }
</script>

<style scoped lang="scss">
  .portfolio__more {
    margin: 0 auto;

    &.hidden {
      display: none;
    }

    &:disabled {
      opacity: 0.2;
      cursor: initial;
    }

    @include m-b-tablet-lg-down {
      margin: 0;
    }

    @include m-b-down(435px) {
      width: 40px;
      height: 40px;
      min-width: fit-content;
      padding: 0;
      transform: rotate(90deg);
      margin: 0 10px;

      span {
        display: none;
      }
    }
  }
</style>
