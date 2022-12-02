<template>

  <div id="app">

    <Header @body-locker="bodyLocker" @anchor="onClickScrollToAnchor"/>

    <main>
      <Hero @anchor="onClickScrollToAnchor"/>
      <Portfolio @body-locker="bodyLocker"/>
      <Services @anchor="onClickScrollToAnchor"/>
      <Features />
      <Callback @show-modal="setModalState"/>
      <Map />
    </main>

    <Footer />

    <Modal :is-opened="this.isModalOpened" :active="activeModal" @close="closeModal"/>
  </div>

</template>

<script>
  import Header from './components/Header.vue'
  import Hero from './components/Hero.vue'
  import Portfolio from './components/Portfolio.vue'
  import Services from './components/Services.vue'
  import Features from './components/Features.vue'
  import Callback from './components/Callback.vue'
  import Map from './components/Map.vue'
  import Footer from './components/Footer.vue'
  import Modal from './components/Modal.vue'

  const body = document.querySelector('body');
  const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

  export default {
    name: 'App',
    
    components: {
      Header,
      Hero,
      Portfolio,
      Services,
      Features,
      Callback,
      Map,
      Footer,
      Modal
    },

    data() {
      return {
        locker: false,
        isModalOpened: false,
        activeModal: null
      }
    },

    methods: {
      setModalState(type) {
        this.isModalOpened = true;
        this.activeModal = type;
      },

      closeModal() {
        this.isModalOpened = false;
        this.activeModal = null;
      },

      bodyLocker() {
        this.locker = !this.locker;

        if(this.locker) {
            body.style.overflow = 'hidden';
            body.style.paddingRight = paddingOffset;
        } else {
            body.style.overflow = 'auto';
            body.style.paddingRight = '0px';
        }
      },

      onClickScrollToAnchor(el) {
        this.gsap.to( window, {duration: .8, scrollTo: {y: el, offsetY: 50, autoKill: false, ease: 'power0.easeNone'}} );
      },

      textTimeline(el, trigger) {
          const tl = this.gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });

          tl
            .fromTo(el,{ left: '150%', opacity: 1 }, {
              left: '-100%',
              opacity: 1,
              ease: 'power0.easeNone'
            });
      }
    },

    mounted() {
      const textElems = document.querySelectorAll('.section-title--dublicated span');
      
      if(textElems) {
        textElems.forEach(el => {
          const trigger = document.getElementById(el.dataset.id);
          this.textTimeline(el, trigger);
        });
      }
      
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: var(--font-family, sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
