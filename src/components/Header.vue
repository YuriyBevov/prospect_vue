<template>
  <header class="main-header">
    <div class="container-fluid main-header__container">
      <a class="main-header-logo" href="index.html" aria-label="Обновить">
        <img :src="require(`@/assets/images/main-logo.svg`)" alt="Логотип" width="81" height="50">
      </a>

      <Contacts />
      
      <Nav 
        :is-opened="navVisibility" 
        @change-nav-visibility="navVisibility = !navVisibility"
        @body-locker="$emit('body-locker')"
        @anchor="setAnchorLink"
      />
      
      <Burger @change-nav-visibility="navVisibility = !navVisibility" :state="navVisibility"/>
    </div>
  </header>
</template>

<script>
  import Burger from './Burger.vue'
  import Contacts from './Contacts.vue'
  import Nav from './Nav.vue'

  export default {
    name: 'Header',
    components: {
      Burger,
      Nav,
      Contacts
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
    },

    mounted() {
      const header = document.querySelector('.main-header');

      const headerInTimeline = this.gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "bottom top",
          onLeaveBack: () => headerInTimeline.reverse()
        }
      });

      headerInTimeline
        .to(header, {
          //y: '-50%',
          position: 'fixed',
          opacity: 0,
          duration: 0,
          padding: '15px 0',
          backgroundColor: 'transparent',
          //zIndex: -1,
        })
        .to('.main-header-logo', {
          display: 'block',
          opacity: 1,
          duration: 0,
        })
        .to('.main-header .contacts', {
          display: 'flex',
          duration: 0,
        })
        //.to(header, {zIndex: 99})
        .to(header, {
          duration: .7,
          ease: 'linear',
          //y: '0',
          opacity: 1,
          backgroundColor: 'rgba(56,181,188,.7)',
        });
    }
  }
</script>

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
