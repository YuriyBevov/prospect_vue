<template>
    <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list-item"><a class="anchor-link" href="#portfolio" data-scroll-to="portfolio">Портфолио</a></li>
          <li class="nav__list-item"><a class="anchor-link" href="#features" data-scroll-to="features">Услуги</a></li>
          <li class="nav__list-item"><a class="anchor-link" href="#outdoor " data-scroll-to="outdoor ">Наружная реклама</a></li>
          <li class="nav__list-item"><a class="anchor-link" href="#callback" data-scroll-to="callback">Обратная связь</a></li>
          <li class="nav__list-item"><a class="anchor-link" href="#map" data-scroll-to="map">Как нас найти</a></li>
          <li class="nav__list-item nav__list-item--contact"><a href="tel:+78126426449" aria-label="Позвонить">+7 (812) 642-64-49</a></li>
          <li class="nav__list-item nav__list-item--contact"><a href="mailto:pro-rek@info.ru" aria-label="Отправить письмо на почту">pro-rek@info.ru</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style lang="scss">
    .nav {
        display: none;

        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.6);

        overflow-y: auto;

        &__list {
            @extend .flex-column;
            position: absolute;
            top: 0;
            right: 0;
            opacity: 0;
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