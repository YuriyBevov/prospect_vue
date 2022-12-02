<template>
  <button
    class="portfolio__collapse main-btn"
    type="button"
    :disabled="this.disabled"
    @click="collapse"
    aria-label="Свернуть"
  >
    <svg v-svg
      symbol="icon-btn-arrow"
      size="0 0 24 24"
    ></svg>
  </button>
</template>

<script>
  export default {

    props: {
      state: Boolean
    },

    data() {
      return {
        disabled: this.$props.state ? !this.$props.state : true
      }
    },

    methods: {
      collapse() {
        this.gsap.to(window, {
          duration: 1.5,
          scrollTo: {y: '.portfolio', offsetY: 40, autoKill: false},
          ease: "power0.easeNone",
          onComplete: () => this.$emit('collapse')
        });
      },
    },

    watch: {
      state: function() {
        this.disabled = !this.$props.state;
      }
    }
  }
</script>

<style scoped lang="scss">
  .portfolio__collapse {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 58px;
    height: 58px;
    min-width: fit-content;
    padding: 0;
    transform: rotate(-90deg);

    &:disabled {
      opacity: 0.2;
      cursor: initial;
    }

    @include m-b-down(435px) {
      position: relative;
      width: 40px;
      height: 40px;
      margin: 0 10px;
    }
  }
</style>
