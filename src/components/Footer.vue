<template>
  <footer class="main-footer">
    <div class="container main-footer__container">
      <a class="anchor-link" href="#hero" aria-label="В начало страницы" data-scroll-to="hero">
        <img :src="require(`@/assets/images/main-logo.svg`)" alt="Логотип" width="125" height="77">
      </a>
      <div class="contacts">
        <a href="tel:+78126426449" aria-label="Позвонить">+7 (812) 642-64-49</a>
        <a href="mailto:pro-rek@info.ru" aria-label="Отправить письмо на почту">pro-rek@info.ru</a>
      </div>
      <div class="developer">
        <a href="https://littleweb.ru" rel="noopener nofollow noreferrer" aria-label="Создано в Littleweb.ru">
          <img :src="require(`@/assets/images/icon-dev.svg`)" width="168" height="44" alt="LittleWeb.ru">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
