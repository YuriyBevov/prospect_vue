<template>
    <transition appear @before-enter="beforeEnter" @enter="enter">
        <nav class="nav" v-if="this.$props.isOpened" @click="onClickCloseNav" >
            <button class="nav__closer" aria-label="Закрыть меню" @click="$emit('change-nav-visibility')">
                <svg v-svg
                    symbol="icon-close"
                    size="0 0 36 36"
                ></svg>
            </button>
            
            <ul class="nav__list">
                <li class="nav__list-item" v-for="(item,index) of navList" :key="index" :data-index="index">
                    <a 
                        @click.prevent="setAnchorLink(item.id)" 
                        class="anchor-link" 
                        href="#" 
                        data-scroll-to="portfolio"
                    >{{item.title}}</a>
                </li>
                <li class="nav__list-item nav__list-item--contact"><a href="tel:+78126426449" aria-label="Позвонить">+7 (812) 642-64-49</a></li>
                <li class="nav__list-item nav__list-item--contact"><a href="mailto:pro-rek@info.ru" aria-label="Отправить письмо на почту">pro-rek@info.ru</a></li>
            </ul>
        </nav>
    </transition>
</template>

<script>
    

    export default {
        name: 'Nav',

        props: {
            isOpened: Boolean
        },

        data() {
            return {
                navList: [
                    { title: 'Портфолио', id: '#portfolio' },
                    { title: 'Услуги', id: '#services' },
                    { title: 'Наружная реклама', id: '#features' },
                    { title: 'Обратная связь', id: '#callback' },
                    { title: 'Как нас найти', id: '#map' },
                ]
            }
        },

        methods: {
            setAnchorLink(id) {
                this.$emit('anchor', id);
                this.$emit('change-nav-visibility');
            },

            onClickCloseNav(evt) {
                if(evt.target.classList.contains('nav')) {
                    this.$emit('change-nav-visibility');
                }
            },

            beforeEnter(el) {
                el.style.opacity = 0;
            },

            enter(el) {
                this.gsap.to(el, {
                    opacity: 1,
                    duration: 1,
                    ease: 'ease-in'
                })

                this.gsap.fromTo('.nav__list-item', {
                    y: 50,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: 'ease-in'
                }, "-=0.4");
            },
        },

        watch: {
            isOpened: function(newVal) {
                this.$emit('body-locker');

                if(!!newVal) {
                    
                }
            }
        }
    }
</script>

<style lang="scss">
    .nav {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.6);

        overflow-y: auto;
        
        &__closer {
            position: absolute;
            top: 30px;
            right: 30px;
            z-index: 10;
            
            svg {
                fill: var(--white);
            }

            cursor: pointer;
        }

        &__list {
            @extend .flex-column;
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            max-width: fit-content;
            height: fit-content;
            min-height: 100vh;
            padding: calc(5vh + 70px) 40px;
            padding-right: calc(5vw + 80px);
            margin-left: 50px;
            border-left: 3px solid var(--white);
            background-color: rgba(51, 181, 188, 0.9);
            overflow: hidden;

            @include m-b-down(435px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: calc(5vh + 70px) 55px;
                max-width: 100%;
                border-left: none;
            }
        }

        &__list-item {
            overflow: hidden;
            padding: 3px;

            margin-bottom: 30px;

            @include m-b-tablet-down {
                margin-bottom: 15px;
            }

            &:first-child {
                margin-top: auto;
            }

            a {
                font-size: 54px;
                font-weight: 500;
                color: var(--white);

                @include m-b-desktop-down {
                    font-size: 44px;
                }

                @include m-b-laptop-down {
                    font-size: 36px;
                }

                @include m-b-tablet-lg-down {
                    font-size: 32px;
                }

                @include m-b-mobile-lg-down {
                    font-size: 28px;
                }

                @include m-b-down(435px) {
                    font-size: 20px;
                }

                @extend .hover-opacity-transition;
            }

            &--contact {
                &:not(:last-of-type) {
                    margin-top: auto;
                    padding-top: 50px;
                }
                margin-bottom: 5px;
                a {
                    font-size: 24px;

                    @include m-b-down(435px) {
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>