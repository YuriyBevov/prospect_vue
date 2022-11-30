<template>
  <div id="app">
    <Header />
    <main>
      <Hero/>
      <Portfolio/>
      <Services />
      <Features />
      <Callback />
      <Map />
    </main>
    <Footer />
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
      Footer
    },

    methods: {
      onClickScrollToAnchor(evt) {
        evt.preventDefault();
        const anchor = '#' + evt.currentTarget.dataset.scrollTo;
        this.gsap.to( window, {duration: 1.2, scrollTo: {y: anchor, autoKill: false}} );
      },

      textTimeline(el) {
          const tl = this.gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });

          tl
            .fromTo(el,{ x: '100vw', opacity: 0 }, {
              x: '-100vw',
              opacity: 1,
              ease: 'power0.easeNone'
            });
        }
    },

    mounted() {
      
      /*this.ScrollSmoother.create({
        smooth: 1.6,
        ease: 'linear'
        //ease: 'power0.easeNone',
        //normalizeScroll: true
      });*/
      
      const anchors = document.querySelectorAll('.anchor-link');

      anchors.forEach(anchor => {
        anchor.addEventListener('click', this.onClickScrollToAnchor);
      });

      //const body = document.querySelector('body');
      /*const textElems = document.querySelectorAll('.section-title span');

      if(textElems) {
        textElems.forEach(el => {
          this.textTimeline(el);
        });
      }*/
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
