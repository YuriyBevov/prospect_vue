<template>
    <section class="features" id="features">
        <div class="container-fluid">
            <div class="section-title section-title--dublicated">
                <h2>Наружная реклама</h2>
                <span aria-hidden="true" data-id="features">Наружная реклама</span>
            </div>

            <div class="features__accordeon accordeon">
                <div 
                    class="accordeon__field"
                    v-for="(item, index) in accordeonFields" :key="index"
                    
                    :class="item.isActive ? 'active' : null"
                >
                    <div class="accordeon__header" @click="onClickOpenAccordeonField"><span>{{item.title}}</span>
                        <svg v-svg
                            symbol="icon-arrow-down"
                            size="0 0 14 8"
                        ></svg>
                    </div>
                    <div class="accordeon__body">
                        <div class="accordeon__body-img-box">
                            <img :src="fillImages(item.body.img)" :alt="item.title" width="640" height="600">
                        </div>
                        <div class="accordeon__body-content">
                            <h3 class="accordeon__title">{{item.contentTitle}}</h3>
                            <p v-for="(text, index) in item.body.text" :key="index">
                                {{text}}
                            </p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    </section>
</template>

<script>
    import {gsap} from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';
    import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    export default {
        name: 'Features',
        data() {
            return {
                accordeonFields: [
                    {
                        title: 'Внешняя подсветка',
                        contentTitle: 'Внешняя подсветка',
                        body: {
                            text: [
                            'Качественное размещение наружной рекламы подразумевает гибкость, ясное понимание того, что нужно заказчику. Безусловно, именно желание человека, дающего рекламу, играет для нас первостепенную роль.',
                            'Советы с нашей стороны носят рекомендательный характер, но они построены на основе тех знаний, что мы имеем в области производства наружной рекламы.'
                            ],
                            img: "outside"
                        }
                    },
                    {
                        title: 'Внутренняя подсветка',
                        contentTitle: 'Внутренняя подсветка',

                        body: {
                            text: [
                            'Качественное размещение наружной рекламы подразумевает гибкость, ясное понимание того, что нужно заказчику. Безусловно, именно желание человека, дающего рекламу, играет для нас первостепенную роль.',
                            'Советы с нашей стороны носят рекомендательный характер, но они построены на основе тех знаний, что мы имеем в области производства наружной рекламы.'
                            ],
                            img: 'inside'
                        }
                    },
                    {
                        title: 'Контражур',
                        contentTitle: 'Контражур',

                        body: {
                            text: [
                            'Качественное размещение наружной рекламы подразумевает гибкость, ясное понимание того, что нужно заказчику. Безусловно, именно желание человека, дающего рекламу, играет для нас первостепенную роль.',
                            'Советы с нашей стороны носят рекомендательный характер, но они построены на основе тех знаний, что мы имеем в области производства наружной рекламы.'
                            ],
                            img: 'backlight'
                        }
                    },
                    {
                        title: 'Металические буквы',
                        contentTitle: 'Металические буквы',

                        body: {
                            text: [
                            'Качественное размещение наружной рекламы подразумевает гибкость, ясное понимание того, что нужно заказчику. Безусловно, именно желание человека, дающего рекламу, играет для нас первостепенную роль.',
                            'Советы с нашей стороны носят рекомендательный характер, но они построены на основе тех знаний, что мы имеем в области производства наружной рекламы.'
                            ],
                            img: 'chrome_golden'
                        }
                    },
                    {
                        title: 'Контурный короб',
                        contentTitle: 'Контурный короб',

                        body: {
                            text: [
                            'Качественное размещение наружной рекламы подразумевает гибкость, ясное понимание того, что нужно заказчику. Безусловно, именно желание человека, дающего рекламу, играет для нас первостепенную роль.',
                            'Советы с нашей стороны носят рекомендательный характер, но они построены на основе тех знаний, что мы имеем в области производства наружной рекламы.'
                            ],
                            img: 'box'
                        }
                    },
                    {
                        isActive: true,
                        title: 'Световая консоль',
                        contentTitle: 'Световая консоль',

                        body: {
                            text: [
                            'Качественное размещение наружной рекламы подразумевает гибкость, ясное понимание того, что нужно заказчику. Безусловно, именно желание человека, дающего рекламу, играет для нас первостепенную роль.',
                            'Советы с нашей стороны носят рекомендательный характер, но они построены на основе тех знаний, что мы имеем в области производства наружной рекламы.'
                            ],
                            img: 'console'
                        }
                    }
                ],
                OFFSET_WIDTH: null,
                fields: null,
            }
        },

        methods: {
            fillImages(img) {
                return require(`@/assets/images/${img}.jpg`);
            },

            scrollToTop(target) {
                gsap.to(window, {duration: 0, scrollTo: {y: target, offsetY: 150, autoKill: true}, ease: "power0.easeNone"});
            },

            calculatePos(fields, target) {
                if( this.OFFSET_WIDTH !== null ) {
                    fields.forEach((field,i) => {
                        if(target === field && !field.classList.contains('transitioned')) {

                        if(!target.classList.contains('active')) {
                            fields.forEach(field => {
                            field.classList.contains('active') ?
                            field.classList.remove('active') : null;
                            });

                            target.classList.add('active');
                        }

                        fields.forEach((field,j) => {
                            if(j > i) {
                                if(!field.classList.contains('transitioned')) {
                                        gsap.to(field, {
                                        duration: 0.5,
                                        delay: 0.2,
                                        left: 'calc(100% - ' + this.OFFSET_WIDTH * (fields.length - j) + 'px)',
                                        ease: 'power0.easeNone'
                                    });

                                    !field.classList.contains('transitioned') ?
                                    field.classList.add('transitioned') : null;
                                }
                            }
                        });
                        } else if(fields[i] === target && field.classList.contains('transitioned')) {
                            if(!target.classList.contains('active')) {
                                fields.forEach(field => {
                                    field.classList.contains('active') ?
                                    field.classList.remove('active') : null;
                                });

                                target.classList.add('active');
                            }

                            fields.forEach((field,j) => {
                                if(j < i + 1 ) {
                                    if(field.classList.contains('transitioned')) {
                                        gsap.to(field, {
                                            duration: 0.5,
                                            delay: 0.2,
                                            left: this.OFFSET_WIDTH * j + 'px',
                                            ease: 'power0.easeNone'
                                        })

                                        field.classList.contains('transitioned') ?
                                        field.classList.remove('transitioned') : null;
                                    }
                                }
                            });
                        }
                    });
                    } else {
                    fields.forEach(field => {
                        field.classList.remove('transitioned');
                    });

                    fields.forEach((field,i) => {
                        if(field.classList.contains('active') && field !== target) {
                            field.classList.remove('active');
                        } else if(!field.classList.contains('active') && field === target) {
                            target.classList.add('active');

                            for (let index = i + 1; index < fields.length; index++) {
                                fields[index].classList.add('transitioned');
                            }
                        }
                    });
                }
            },

            recalculatePos(fields) {
                fields.forEach((field,i) => {
                if(field.classList.contains('transitioned') && this.OFFSET_WIDTH !== null) {
                    field.style.left = 'calc(100% - ' + this.OFFSET_WIDTH * (fields.length - i) + 'px)';
                } else {
                    field.style.left = this.OFFSET_WIDTH * i + 'px';
                }
                })
            },

            onClickOpenAccordeonField(evt) {
                const target = evt.currentTarget.parentNode;

                if(window.innerWidth < 961) {
                    setTimeout(() => {
                        this.scrollToTop(target);
                    }, 50);
                }

                if(!target.classList.contains('active')) {
                    this.calculatePos(this.fields, target);

                    const body = target.querySelector('.accordeon__body');
                    gsap.from(body, {
                        duration: 0.7,
                        opacity: 0,
                        ease: 'power0.easeNone'
                    });
                }
            },

            onWindowResizeHandler() {
                if(window.innerWidth < 961) {
                    this.OFFSET_WIDTH = null;
                    this.recalculatePos(this.fields);
                }
                else if( window.innerWidth > 960 && window.innerWidth < 1441) {
                    this.OFFSET_WIDTH = 70;
                    this.recalculatePos(this.fields);
                } else if(window.innerWidth > 1440) {
                    this.OFFSET_WIDTH = 100;
                    this.recalculatePos(this.fields);
                }
            }
        },

        mounted() {
            this.fields = document.querySelectorAll('.accordeon__field');

            if(window.innerWidth > 960 && window.innerWidth < 1441) {
                this.OFFSET_WIDTH = 70;
            } else if(window.innerWidth > 1440) {
                this.OFFSET_WIDTH = 100;
            }
            
            this.fields.forEach((field,i) => {
                field.style.left = this.OFFSET_WIDTH * i + 'px';
            })

            window.addEventListener('resize', this.onWindowResizeHandler);
        }
    }
</script>

<style scoped lang="scss">
    .features {
        @extend .section-offset;
    }
</style>