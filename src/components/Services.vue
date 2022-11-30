<template>
    <section class="services" id="services">
        <div class="container services__container">
            <div class="section-title section-title--dublicated">
                <h2>Наши услуги
                    <!--<span aria-hidden="true">Услуги</span>-->
                </h2>
            </div>
            <ul class="services__list">
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-1@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-1"
                            size="0 0 220 180"
                        ></svg>
                        <span>Наружная реклама</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-2@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-2"
                            size="0 0 220 180"
                        ></svg>
                        <span>Широкоформатная печать</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-3@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-3"
                            size="0 0 220 180"
                        ></svg>
                        <span>Интерьерная печать</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-4@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-4"
                            size="0 0 220 180"
                        ></svg>
                        <span>Рекламные конструкции</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-5@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-5"
                            size="0 0 220 180"
                        ></svg>
                        <span>Торговое оборудование</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-6@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-6"
                            size="0 0 220 180"
                        ></svg>
                        <span>Световые панели</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-7@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-7"
                            size="0 0 220 180"
                        ></svg>
                        <span>Плоттерная резка</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-8@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-8"
                            size="0 0 220 180"
                        ></svg>
                        <span>Фрезеровка</span>
                    </div>
                </li>
                <li class="services__list-item">
                    <img :src="require('@/assets/images/feature-item-bg-9@1x.jpg')"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            symbol="icon-feature-9"
                            size="0 0 220 180"
                        ></svg>
                        <span>Согласование рекламы</span>
                    </div>
                </li>
            </ul>
            <a class="services__btn anchor-link main-btn" href="callback" data-scroll-to="callback"><span>Оставить заявку</span>
                <svg v-svg
                    symbol="icon-btn-arrow"
                    size="0 0 24 24"
                ></svg>
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Services'
    }
</script>

<style scoped lang="scss">
    .services {
        @extend .section-offset;

        &__container {
            position: relative;
            @extend .flex-column;
        }

        &__list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            grid-column-gap: 30px;
            grid-row-gap: 30px;

            max-width: 1405px;

            @extend .list-offset;

            @include m-b-tablet-down {
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
            width: 100%;
            }
        }

        &__list-item {
            position: relative;

            img {
                position: absolute;
                top: 0;
                left: 0;

                display: flex;
                width: 100%;
                height: 100%;
                overflow: hidden;
                object-fit: cover;

                transition: transform var(--slow-transition);
                z-index: -1;
            }

            &-content {
                @extend .flex-column;
                align-items: center;

                width: 100%;
                height: 100%;

                padding: 20px;
                padding-top: 50px;

                svg {
                    width: 75%;
                    max-width: 220px;
                    height: 75%;
                    max-height: 180px;
                    margin-bottom: 25px;
                    fill: var(--white);

                    transition: fill var(--main-transition);

                    @include m-b-tablet-lg-down {
                    margin-bottom: 10px;
                    }
                }

                span {
                    font-weight: 600;
                    font-size: 30px;
                    text-align: center;

                    margin-top: auto;

                    color: var(--white);

                    transition: color var(--main-transition);

                    @include m-b-desktop-down {
                    font-size: 26px;
                    }

                    @include m-b-laptop-down {
                    font-size: 22px;
                    }

                    @include m-b-tablet-lg-down {
                    font-size: 18px;
                    }
                }
            }

            &:hover,
            &:focus {
            img {
                transform: scale(1.1);
            }

            .services__list-item-content {
                svg {
                    fill: var(--primary);
                }

                span {
                    color: var(--primary);
                }
            }
            }
        }

        &__btn {
            margin: 0 auto;
        }
        }
</style>