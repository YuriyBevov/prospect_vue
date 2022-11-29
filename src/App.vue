<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  
  components: {
    Header,
    Hero,
    Footer
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
