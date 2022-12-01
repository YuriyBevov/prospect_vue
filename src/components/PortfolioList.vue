<template>
  <div class="portfolio__list-container">
    <ul class="portfolio__list">
      <li class="portfolio__list-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <a href="#" @click="showGalleryModal" v-if="item.type === 'image'" :data-id="item.id" aria-label="Посмотреть">
          <img :src="require(`@/assets/images/${item.source}@1x.jpg`)"/>
        </a>

        <a href="#" @click="showGalleryModal" v-if="item.type === 'video'" :data-id="item.id" aria-label="Посмотреть">
          <video controls muted loop playsinline :poster="require(`@/assets/images/hero-logo.svg`)" class="portfolio-video">
            <source :src="require(`@/assets/video/${item.source}.mp4`)" type='video/mp4'>
            <source :src="require(`@/assets/video/${item.source}.webm`)" type='video/webm'>
          </video>
        </a>
      </li>

      <li v-if="!this.$props.items.length" class="portfolio__list-item portfolio__list-item--empty">
        <img :src="require(`@/assets/images/hero-logo.svg`)" width="100%" height="400"/>
        <p>Кажется, вы не выбрали ни одного параметра фильтрации...</p>
      </li>
    </ul>

    
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
  SwiperCore.use([ Navigation, Thumbs]);

  let swiper, thumbs = null;

  export default {
    props: {
      items: Array,
      initial: Array
    },

    data() {
      return {
        galleryList: [],
      }
    },

    methods: {
      showGalleryModal(evt) {
        console.log('Show MODAL')
        /*evt.preventDefault();

        const modal = document.querySelector('#gallery-modal');
        new Modal(modal).show();

        this.initSwiper(evt.currentTarget.dataset.id - 1);*/
      },

      fillSwiper() {
        const swiperMainNode = document.querySelector('.swiper-main > .swiper-wrapper');
        const swiperThumbsNode = document.querySelector('.swiper-thumbs > .swiper-wrapper');

        let swiperMainLayout = '';

        this.galleryList.forEach(slide => {
          if(slide.type === 'image') {
            swiperMainLayout += `
              <div class="swiper-slide
                test
              </div>
            `;
          }

          if(slide.type === 'video') {
            swiperMainLayout += `
              <div class="swiper-slide">
                <video muted playsinline loop poster="./assets/img/hero-logo.svg" >
                  <source src="./assets/video/${slide.source}.mp4" type='video/mp4'>
                </video>
              </div>
            `;
          }

          swiperMainNode.innerHTML = swiperMainLayout;
          swiperThumbsNode.innerHTML = swiperMainLayout;
        });
      },

      initSwiper(currentSlide) {
        swiper = new Swiper(".swiper-thumbs", {
          spaceBetween: 15,
          slidesPerView: 'auto',
          freeMode: false,
          watchSlidesProgress: true,
          slideToClickedSlide: true,
        });

        thumbs = new Swiper(".swiper-main", {
          spaceBetween: 15,

          centeredSlides: true,
          navigation: {
            nextEl: ".gallery-swiper-button-next",
            prevEl: ".gallery-swiper-button-prev",
          },

          thumbs: {
            swiper: swiper,
          },
        });

        swiper.slideTo(currentSlide);
        thumbs.slideTo(currentSlide);

        let mainVideo, thumbVideo = null;

        setTimeout(() => {
          mainVideo = document.querySelector('.swiper-main .swiper-slide-active > video');
          thumbVideo = document.querySelector('.swiper-thumbs .swiper-slide-thumb-active > video');

          if(mainVideo && thumbVideo) {
            video('play');
          }
        }, 100);

        thumbs.on('slideChangeTransitionEnd', function () {
          if(mainVideo && thumbVideo) {
            video('pause');
          }

          mainVideo = document.querySelector('.swiper-main .swiper-slide-active > video');
          thumbVideo = document.querySelector('.swiper-thumbs .swiper-slide-thumb-active > video');

          if(mainVideo && thumbVideo) {
            video('play');
          }
        });

        function video(state) {
          if(state == 'play') {
            if(mainVideo) {
              mainVideo.play();
            }

            if(thumbVideo) {
              thumbVideo.play();
            }
          }

          if(state == 'pause') {
            if(mainVideo) {
              mainVideo.pause();
            }

            if(thumbVideo) {
              thumbVideo.pause();
            }
          }
        }

      },
    },

    watch: {
      initial: function() {
        this.galleryList = this.$props.initial;
        //this.fillSwiper();
      }
    }
  }
</script>

<style lang="scss">
  .portfolio__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 40px;
    grid-row-gap: 40px;

    min-height: 400px;

    @extend .list-offset;

    @include m-b-laptop-down {
      grid-column-gap: 25px;
      grid-row-gap: 25px;
    }

    @include m-b-down(635px) {
        grid-template-columns: 1fr;
    }
  }

  .portfolio__list-item {
    background-color: var(--dark);

    &--empty {
      @extend .flex-column;
      align-items: center;
      background-color: transparent;
      grid-column: 1/3;

      img {
        width: 100%;
        height: 100%;
        max-height: 450px;
        object-fit: contain;
        margin-bottom: 30px;
      }

      p {
        font-size: 24px;
        text-align: center;

        @include m-b-mobile-lg-down {
          font-size: 18px;
        }
      }
    }
    
    a {
      display: flex;
      width: 100%;
      height: 100%;

      overflow: hidden;

      img {
        display: block;
        width: 100%;
        height: 100%;
        max-height: 580px;
        overflow: hidden;
        object-fit: cover;
      }

      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
