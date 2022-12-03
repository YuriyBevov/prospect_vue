<template>
  <section class="hero" id="hero">
      <video-background 
          :src="require(`@/assets/video/test.mp4`)"
          style="max-height: 1080px; height: 100vh; min-height: inherit;"
          @ready="hideLoader"
      >

        <div class="container-fluid hero__container">
          <h1 class="visually-hidden">ООО "Проспект". Производство наружной рекламы, Санкт-Петербург.</h1>
          
          <div class="hero__action">
            <a href="mailto:pro-rek@info.ru" aria-label="Написать на почту">
              <svg v-svg
                symbol="icon-mail"
                size="0 0 24 24"
              ></svg>
              <div class="contact-helper"><span>pro-rek@info.ru</span></div>
            </a>
            <a href="tel:+78126426449" aria-label="Связаться по телефону">
              <svg v-svg
                symbol="icon-phone"
                size="0 0 24 24"
              ></svg>
              <div class="contact-helper"><span>+7(812)642-64-49</span></div>
            </a>
              
              <a class="anchor-link" href="#" aria-label="Оставить заявку" data-scroll-to="callback" @click.prevent="$emit('anchor', '#callback')">
                <svg v-svg
                  symbol="icon-help"
                  size="0 0 24 24"
                ></svg>
              <div class="contact-helper"><span>Оставить заявку</span></div>
            </a>
          </div>

          <div class="hero__logo">
            <img :src="require(`@/assets/images/hero-logo.svg`)" alt="Логотип" width="900" height="660">
          </div>
          
          <a @click.prevent="$emit('anchor', '#portfolio')" class="anchor-link hero__arrow-down hidden" href="#" data-scroll-to="portfolio" aria-label="Скролл вниз" style="opacity: 1;">
            <svg v-svg
              symbol="icon-hero-arrow"
              size="0 0 40 16"
            ></svg>
            <svg v-svg
              symbol="icon-hero-arrow"
              size="0 0 40 16"
            ></svg>
            <svg v-svg
              symbol="icon-hero-arrow"
              size="0 0 40 16"
            ></svg>
          </a>
        </div>
      </video-background>
  </section>
</template>

<script>

  export default {
    name: 'Hero',

    data() {
      return {
        isVideoLoaded: false
      }
    },

    methods: {
      hideLoader() {
        if(!this.isVideoLoaded) {
          this.$emit('hide-loader');
          this.isVideoLoaded = true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .video-background {
    width: 100%;
    max-width: 1920px;
  }

  .hero {
    position: relative;
    height: 100vh;
    min-height: 844px;
    max-height: 1080px;
    background-color: var(--primary);

    @extend .section-mb;
    overflow: hidden;

    @include m-b-tablet-lg-down {
      min-height: 657px;
    }

    @include m-b-tablet-down {
      min-height: 578px;
    }

    @include m-b-mobile-lg-down {
      min-height: 438px;
    }

    &__container {
      position: relative;

      @extend .flex-column;
      height: 100%;
    }

    &__logo {
      width: 100%;
      height: 100%;
      margin-bottom: 50px;

      img {
        width: 75%;
        height: auto;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        max-width: 1000px;
        will-change: auto;
      }
    }

    &__action {
      position: absolute;
      top: 50%;
      left: 5vw;
      transform: translateY(-50%);

      z-index: 4;

      a {
        position: relative;
        @extend .flex-centered-content;
        width: 50px;
        height: 50px;
        border: 2px solid var(--white);

        margin-bottom: 10px;

        svg {
          fill: var(--white);
        }

        &:hover,
        &:focus {
          .contact-helper {
            display: flex;
            opacity: 1;
          }
        }
      }

      @include m-b-tablet-lg-down {
        display: none;
      }

      .contact-helper {
        display: none;
        position: absolute;
        top: -2px;
        left: calc(100% + 20px);

        @extend .flex-centered-content;

        width: fit-content;
        height: 50px;
        padding: 10px;
        border-radius: 4px;
        opacity: 0;
        color: var(--dark);

        span {
          display: block;
          font-weight: 600;
          font-size: 20px;
          line-height: 1;
          white-space: nowrap;
        }
      }
    }

    &__arrow-down {
      bottom: 100px;

      @extend .flex-column;
      margin: 0 auto;
      margin-bottom: 50px;

      @include m-b-tablet-down {
        margin-bottom: 20vh;
      }

      svg {
        fill: var(--white);
        margin-bottom: -5px;
      }

      z-index: 4;
    }
  }
</style>
