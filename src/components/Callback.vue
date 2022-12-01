<template>
    <section class="callback" id="callback">
        <div class="container callback__container">
          <h2 class="visually-hidden">Оставить заявку</h2>
          <div class="callback__form">
            <p class="callback__text">Заполните форму <br> и&nbsp;мы&nbsp;обязательно Вам перезвоним&nbsp;!</p>

            <form class="form" action="mail.php" method="POST">
              <div class="form__content">
                <fieldset class="form__data">
                  <input 
                    type="text" 
                    placeholder="Как к вам обращаться" 
                    id="user_name" 
                    name="user_name" 
                    autocomplete="off"
                    :class="!form.name.isValid && isFormSubmitted ? 'invalid-control' : null"
                    v-model.trim="form.name.value"
                    @change="form.name.isValid = true"
                  >
                  <input 
                    type="tel" 
                    placeholder="Номер телефона" 
                    id="user_phone" 
                    name="user_phone" 
                    autocomplete="off"
                    :class="!form.phone.isValid && isFormSubmitted ? 'invalid-control' : null"
                    v-model="form.phone.value"
                    @change="form.phone.isValid = true"
                  >
                </fieldset>
                <fieldset>
                  <input 
                    type="checkbox" 
                    id="user_accept"
                    :class="!form.rules.isValid && isFormSubmitted ? 'invalid-control' : null"
                    v-model="form.rules.value"
                    @change="form.rules.isValid = true"
                  >
                  <label for="user_accept" tabindex="0"> Согласен на обработку персональных данных</label>
                </fieldset>
              </div>

              <div class="form__footer">
                <button 
                  class="form__submit main-btn" 
                  type="submit"
                  @click.prevent="formValidation"
                >
                  <span>Отправить</span>
                    <svg v-svg
                      symbol="icon-btn-arrow"
                      size="0 0 24 24"
                    ></svg>
                </button>
              </div>
            </form>
          </div>

          <div class="callback__side">
            <div class="callback__side-overlay-text">
                <span>Оставить</span><span>заявку</span>
            </div>
            <svg v-svg
                symbol="icon-callback-logo"
                size="0 0 244 150"
            ></svg>
          </div>
        </div>
    </section>
</template>

<script>
  import IMask from 'imask';

  export default {
    name: 'Callback',

    data() {
      return {
        isFormSubmitted: false,

        form: {
          name: {
            value: '',
            isValid: false
          },
          phone: {
            value: '',
            isValid: false
          },
          rules: {
            value: false,
            isValid: false
          },
        }
      }
    },

    methods: {
      formValidation() {
        this.isFormSubmitted = true;
        let invalidControls = [];

        this.form.name.isValid = true;
        this.form.phone.isValid = true;
        this.form.rules.isValid = true;

        if(this.form.name.value === '') {
          this.form.name.isValid = false;
          invalidControls.push(false)
        } else {
          this.form.name.isValid = true;
          invalidControls.push(true)
        }
        console.log(this.form.phone.value.length)
        if(this.form.phone.value.length !== 19) {
          this.form.phone.isValid = false;
          invalidControls.push(false)
        } else {
          this.form.phone.isValid = true;
          invalidControls.push(true)
        }

        if(!this.form.rules.value) {
          this.form.rules.isValid = false;
          invalidControls.push(false)
        } else {
          this.form.rules.isValid = true;
          invalidControls.push(true)
        }

        if(!invalidControls.includes(false)) {
          this.sendForm();
        }
      },

      sendForm() {
        const form = document.querySelector('form');
        console.log(form, form.method)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            if(xhr.response.indexOf('SUCCESS') > -1) {
              this.success();
            } else {
              this.error();
            }
          } else {
            this.error();
          }
        };
        xhr.send(new FormData(form));
      },

      success() {
        console.log('SUCCESS');
        
        this.form.name.value = '';
        this.form.phone.value = '';
        this.form.rules.value = false;
        this.$emit('show-modal', 'SUCCESS');
      },

      error() {
        console.log('ERROR in callback');

        this.$emit('show-modal', 'ERROR');
      },
    },

    mounted() {
      const phoneFields = document.querySelectorAll('input[type="tel"');

      let maskOptions = {
        mask: '+{7} (000) 000-00-00'
      }

      phoneFields.forEach(field => {
        IMask(field, maskOptions);
      })
    }
  }
</script>

<style scoped lang="scss">
  .callback {
    padding: 70px 0;

    @include m-b-desktop-down {
      padding: 60px 0;
    }

    @include m-b-laptop-down {
      padding: 50px 0;
    }

    @include m-b-tablet-lg-down {
      padding: 40px 0;
    }

    @include m-b-mobile-lg-down {
      padding: 30px 0;
    }

    background-color: var(--primary);

    &__container {
      display: grid;
      grid-template-columns: minmax(500px, 575px) auto;
      grid-column-gap: 40px;

      @include m-b-down(910px) {
        grid-template-columns: 1fr;
      }
    }

    &__form {
      @extend .flex-column;

      p {
        font-size: 44px;

        @include m-b-laptop-down {
          font-size: 40px;
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

        line-height: 1.1;

        margin-bottom: 60px;
        color: var(--white);

        @include m-b-down(635px) {
          margin-bottom: 30px;
        }
      }
    }

    &__side {
      @extend .flex-centered-content;
      position: relative;

      @include m-b-laptop-down {
        flex-direction: column;
      }

      @include m-b-down(910px) {
        display: none;
      }

      &-overlay-text {
        @extend .flex-column;
        justify-content: center;

        @include m-b-laptop-down {
          order: 2;
        }

        span {
          font-weight: 700;
          font-size: 212px;

          @include m-b-down(1800px) {
            font-size: 168px;
          }

          @include m-b-down(1600px) {
            font-size: 132px;
          }

          @include m-b-desktop-down {
            font-size: 106px;
          }

          @include m-b-laptop-down {
            font-size: 60px;
          }

          line-height: 80%;
          text-align: center;

          color: #40BDC5;
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 60%;
        fill: var(--white);

        @include m-b-laptop-down {
            position: static;
            width: 165px;
            height: auto;
            transform: initial;
            order: 1;
        }
      }
    }
  }
</style>