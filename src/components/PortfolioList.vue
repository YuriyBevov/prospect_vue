<template>
  <div class="portfolio__list-container">
    <ul class="portfolio__list">
      <li class="portfolio__list-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <a href="#" @click.prevent="showGalleryModal(index)" v-if="item.type === 'image'" :data-id="item.id" aria-label="Посмотреть">
          <img loading="lazy" :src="require(`@/assets/images/${item.source}@1x.jpg`)"/>
        </a>

        <a href="#" @click.prevent="showGalleryModal(index)" v-if="item.type === 'video'" :data-id="item.id" aria-label="Посмотреть">
          <video preload="none" controls muted loop playsinline :poster="require(`@/assets/images/hero-logo.svg`)" class="portfolio-video" disablePictureInPicture="true">
            <source :src="require(`@/assets/video/${item.source}.mp4`)" type='video/mp4'>
            <source :src="require(`@/assets/video/${item.source}.webm`)" type='video/webm'>
          </video>
        </a>
      </li>

      <li v-if="!this.$props.items.length" class="portfolio__list-item portfolio__list-item--empty">
        <img loading="lazy" :src="require(`@/assets/images/hero-logo.svg`)" width="100%" height="400"/>
        <p>Кажется, вы не выбрали ни одного параметра фильтрации...</p>
      </li>
    </ul>    
  </div>
</template>

<script>
  export default {
    name: 'PortfolioList',

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
      showGalleryModal(index) {
        this.$emit('open-gallery', index);
      },
    },

    watch: {
      initial: function() {
        this.galleryList = this.$props.initial;
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
