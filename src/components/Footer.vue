<template>
  <footer class="main-footer">
    <div class="container main-footer__container">
      <a class="anchor-link" href="#hero" aria-label="В начало страницы" data-scroll-to="hero">
        <img :src="require(`@/assets/images/main-logo.svg`)" alt="Логотип" width="125" height="77">
      </a>
      
      <Contacts/>

      <div class="developer">
        <a href="https://littleweb.ru" rel="noopener nofollow noreferrer" aria-label="Создано в Littleweb.ru">
          <img :src="require(`@/assets/images/icon-dev.svg`)" width="168" height="44" alt="LittleWeb.ru">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  import Contacts from './Contacts.vue'
  export default {
    name: 'Footer',
    components: {
      Contacts
    }
  }
</script>

<style lang="scss">
  .main-footer {
    padding: 30px 0;
    background-color: var(--main-footer-bg);

    &__container {
      @extend .flex-wrap;
      align-items: center;

      @include m-b-tablet-down {
        flex-direction: column;

        & > a {
          margin-bottom: 40px;
        }
      }
    }
  }
</style>
