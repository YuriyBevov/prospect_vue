<template>
  <header class="main-header">
    <div class="container-fluid main-header__container">
      <a class="main-header-logo" href="index.html" aria-label="Обновить">
        <img :src="require(`@/assets/images/main-logo.svg`)" alt="Логотип" width="81" height="50">
      </a>
      <div class="contacts">
        <a href="tel:+78126426449" aria-label="Позвонить">+7 (812) 642-64-49</a>
        <a href="mailto:pro-rek@info.ru" aria-label="Отправить письмо на почту">pro-rek@info.ru</a>
      </div>
      
      <Nav 
        :is-opened="navVisibility" 
        @change-nav-visibility="navVisibility = !navVisibility"
        @body-locker="$emit('body-locker')"
        @anchor="setAnchorLink"
      />
      <Burger @change-nav-visibility="navVisibility = !navVisibility"/>
    </div>
  </header>
</template>

<script>
  import Burger from './Burger.vue'
  import Nav from './Nav.vue'

  export default {
    name: 'Header',
    components: {
      Burger,
      Nav
    },

    data() {
      return {
        navVisibility: false,
      }
    },

    methods: {
      setAnchorLink(el) {
        this.$emit('anchor', el)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .main-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    background-color: transparent;

    padding: 30px 0;

    z-index: 99;

    &-logo {
      display: none;
    }

    &__container {
      @extend .flex-wrap;
      align-items: center;
    }

    .contacts {
      display: none;
      width: fit-content;
      border-bottom: 0;
      padding: 0;
      margin: 0;
      
      @include m-b-down(435px) {
        display: none !important;
      }
    }
  }
</style>
