<template>
    <button class="burger" type="button" aria-label="Меню">
        <span class="burger__line burger__line--top"></span>
        <span class="burger__line burger__line--middle"></span>
        <span class="burger__line burger__line--bottom"></span>
    </button>
</template>

<script>
    export default {
        name: 'Burger'
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