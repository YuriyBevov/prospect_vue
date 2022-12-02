<template>
    <transition appear @before-enter="beforeEnter" @enter="enter">
        <div class="gallery-wrapper">
            <button class="gallery-closer" aria-label="Закрыть меню" @click="$emit('close-gallery')">
                <svg v-svg
                    symbol="icon-close"
                    size="0 0 36 36"
                ></svg>
            </button>

            <div class="gallery-content">
                <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    :loop="false"
                    :thumbs="{ swiper: thumbsSwiper }"
                    class="swiper swiper-main"
                    :navigation="true"
                    :zoom="swiperOptions.zoom"
                    :initialSlide="this.$props.startIndex"
                >
                    <swiper-slide
                        v-for="(slide, index) in this.$props.items" :key="index"
                    >
                    <div class="swiper-zoom-container" v-if="slide.type === 'image'">
                        <img  :src="require(`@/assets/images/${slide.source}@1x.jpg`)" :alt="slide.description" width="800" height="600"/>
                    </div>
                        <video
                            v-else
                            preload="none" 
                            muted 
                            playsinline 
                            loop 
                            controls

                            :poster="require(`@/assets/images/hero-logo.svg`)"
                        > 
                            <source :src="require(`@/assets/video/${slide.source}.mp4`)" type="video/mp4" width="800" height="600">
                            <!--<source :src="require(`@/assets/video/ML01.ogg`)" type="video/ogg" width="800" height="600">
                            <source :src="require(`@/assets/video/ML01.webp`)" type="video/webp" width="800" height="600">-->
                        </video>
                    </swiper-slide>
                </swiper>

                <swiper
                    @swiper="setThumbsSwiper"
                    watch-slides-visibility
                    watch-slides-progress
                    
                    :space-between="5"
                    :breakpoints="swiperOptions.breakpoints"
                    :initialSlide="this.$props.startIndex"
                    class="swiper swiper-thumbs"

                >
                    <swiper-slide
                        v-for="(slide, index) in this.$props.items" :key="index"
                    >
                        <img v-if="slide.type === 'image'" :src="require(`@/assets/images/${slide.source}@1x.jpg`)" :alt="slide.description" width="800" height="600"/>

                        <video
                            v-else
                            preload="none"
                            muted
                            playsinline
                            loop
                            :poster="require(`@/assets/images/hero-logo.svg`)"
                        > 
                            <source :src="require(`@/assets/video/${slide.source}.mp4`)" type="video/mp4" width="800" height="600">-->
                            <!--<source :src="require(`@/assets/video/ML01.ogg`)" type="video/ogg" width="800" height="600">
                            <source :src="require(`@/assets/video/ML01.webp`)" type="video/webp" width="800" height="600">-->
                        </video>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </transition>
</template>

<script>
    import { Navigation, Thumbs, Zoom } from 'swiper'
    import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
    import 'swiper/swiper-bundle.css'
    SwiperCore.use([Navigation, Thumbs, Zoom])

    export default {
        name: 'Gallery',

        props: {
            items: Array,
            startIndex: Number
        },

        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                thumbsSwiper: null,

                swiperOptions: {
                    breakpoints: {       
                        320: {       
                            slidesPerView: 'auto'  
                        },
                    },

                    zoom: {
                        maxRatio: 3,
                    },
                }
            }
        },

        methods: {
            setThumbsSwiper(swiper) {
                this.thumbsSwiper = swiper;
            },

            beforeEnter(el) {
                el.style.opacity = 0;
            },

            enter(el) {
                this.gsap.to(el, {
                    opacity: 1,
                    duration: .75,
                    delay: 0.05,
                    ease: 'ease-in'
                })
            },
        },
    }
</script>

<style lang="scss">
    .gallery-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        max-height: 100vh;
        background-color: rgba(0, 0, 0, 0.98);
        padding: 0px;
        z-index: 105;
        outline: 1px solid white;
    }

    .gallery-closer {
        position: absolute;
        top: 30px;
        right: 23px;

        svg {
            fill: var(--primary);
        }

        cursor: pointer;
        z-index: 10;
    }

    .gallery-content {
        padding: 20px;
        height: 100%;
    }

    .swiper {
        &-slide {
            display: flex;
            align-items: center;
            justify-content: center;

            img,
            video {
                display: block;
                object-fit: contain;
                width: 100%;
                height: 100%;
            }
        }
    }

    .swiper-thumbs {
        height: 150px;
        img,
        video {
            display: block;
            object-fit: contain;
            width: 100%;
            height: inherit;
        }

        .swiper-slide {
            width: 150px;
            height: 150px;

            @include m-b-mobile-lg-down {
                width: 70px;
                height: 70px;
            }

            opacity: 0.7;
        }

        .swiper-slide-thumb-active {
            opacity: 1;
            border: 2px solid var(--primary);
        }
    }

    .swiper-main {
        height: calc(100% - 175px);
        width: 100%;
        margin-bottom: 20px;

        img,
        video {
            object-fit: contain;
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: var(--primary);
    }
</style>