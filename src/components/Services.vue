<template>
    <section class="services" id="services">
        <div class="container services__container">
            <div class="section-title section-title--dublicated">
                <h2>Наши услуги</h2>
                <span aria-hidden="true">Услуги</span>
            </div>
            <ul class="services__list">
                <li 
                    class="services__list-item"
                    v-for="(service, index) in services" :key="index"
                >
                    <img :src="require(`@/assets/images/${service.img}@1x.jpg`)"/>
                    <div class="services__list-item-content">
                        <svg v-svg
                            :symbol="service.icon"
                            size="0 0 220 180"
                        ></svg>
                        <span>{{service.title}}</span>
                    </div>
                </li>
            </ul>
            <a @click.prevent="$emit('anchor', '#callback')" class="services__btn anchor-link main-btn" href="#" ><span>Оставить заявку</span>
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
        name: 'Services',

        data() {
            return {
                services: [
                    { title: 'Наружная реклама', icon: 'icon-feature-1', img: 'feature-item-bg-1' },
                    { title: 'Широкоформатная печать', icon: 'icon-feature-2', img: 'feature-item-bg-2' },
                    { title: 'Интерьерная печать', icon: 'icon-feature-3', img: 'feature-item-bg-3' },
                    { title: 'Рекламные конструкции', icon: 'icon-feature-4', img: 'feature-item-bg-4' },
                    { title: 'Торговое оборудование', icon: 'icon-feature-5', img: 'feature-item-bg-5' },
                    { title: 'Световые панели', icon: 'icon-feature-6', img: 'feature-item-bg-6' },
                    { title: 'Плоттерная резка', icon: 'icon-feature-7', img: 'feature-item-bg-7' },
                    { title: 'Фрезеровка', icon: 'icon-feature-8', img: 'feature-item-bg-8' },
                    { title: 'Согласование рекламы', icon: 'icon-feature-9', img: 'feature-item-bg-9' },
                ]
            }
        }
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