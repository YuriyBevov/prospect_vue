<template>
    <button class="burger" type="button" aria-label="Меню" @click="changeNavVisibility">
        <span class="burger__line burger__line--top"></span>
        <span class="burger__line burger__line--middle"></span>
        <span class="burger__line burger__line--bottom"></span>
    </button>
</template>

<script>
    export default {
        name: 'Burger',

        props: {
            state: Boolean
        },

        data() {
            return {
                burgerLineTop: null,
                burgerLineMiddle: null,
                burgerLineBottom: null,
                burgerLinesTimeline: null,
                isBurgerClicked: false
            }
        },

        methods: {
            changeNavVisibility() {
                this.$emit('change-nav-visibility');

                if(!this.isBurgerClicked) {
                    this.burgerLinesTimeline.play();
                    this.isBurgerClicked = !this.isBurgerClicked
                } else {
                    this.burgerLinesTimeline.reverse();
                    this.isBurgerClicked = !this.isBurgerClicked
                }
            }
        },

        watch: {
            state: function(newVal) {
                if(newVal === false) {
                    this.burgerLinesTimeline.reverse();
                    this.isBurgerClicked = !this.isBurgerClicked
                }
            }
        },

        mounted() {
            this.burgerLineTop = document.querySelector('.burger__line--top');
            this.burgerLineMiddle = document.querySelector('.burger__line--middle');
            this.burgerLineBottom = document.querySelector('.burger__line--bottom');

            this.burgerLinesTimeline = this.gsap.timeline().pause();

            this.burgerLinesTimeline.to(this.burgerLineTop, {
                y: 8,
                duration: 0.3,
                delay: 0.05,
                ease: 'ease-in'
            })
            .to(this.burgerLineMiddle, {
                opacity: 0,
                duration: 0.3,
                delay: 0.05,
                ease: 'ease-in'
            }, "-=0.35")
            .to(this.burgerLineBottom, {
                y: -8,
                duration: 0.3,
                delay: 0.05,
                ease: 'ease-in',
            }, "-=0.35")
            .to(this.burgerLineTop, {
                rotate: '45deg',
                duration: 0.3,
                delay: 0.05,
                ease: 'ease-in'
            })
            .to(this.burgerLineBottom, {
                rotate: '-45deg',
                duration: 0.3,
                delay: 0.05,
                ease: 'ease-in',
            }, "-=0.35")
        }
    }
</script>

<style lang="scss">
    .burger {
        @extend .flex-column;
        justify-content: center;

        width: 30px;
        height: 30px;

        margin-left: auto;

        &__line {
            width: 100%;
            height: 2px;
            margin: 3px 0;

            background-color: var(--white);
        }

        cursor: pointer;
        z-index: 10;
    }
</style>