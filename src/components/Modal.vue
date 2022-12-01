<template>
    <div class="modal" v-if="isModalOpened" @click="closeModal">
        <div class="modal-container modal-success" v-if="activeModal === 'SUCCESS'">
            <button class="modal-close" type="button" @click="$emit('close')">
              <svg v-svg
                symbol="icon-close"
                size="0 0 32 32"
              ></svg>
            </button>
            <div class="modal-content">
                <svg v-svg
                symbol="icon-success"
                size="0 0 100 100"
              ></svg>
              <p>Ваша заявка <br>успешно отправлена.</p>
            </div>
        </div>

        <div class="modal-container modal-success" v-if="activeModal === 'ERROR'">
            <button class="modal-close" type="button" @click="$emit('close')">
              <svg v-svg
                symbol="icon-close"
                size="0 0 32 32"
              ></svg>
            </button>
            <div class="modal-content">
                <svg v-svg
                symbol="icon-error"
                size="0 0 100 100"
              ></svg>
              <p>Что-то пошло не&nbsp;так... <br> Попробуйте еще раз.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        
        props: {
            isOpened: Boolean,
            active: String
        },

        data() {
            return {
                isModalOpened: false,
                activeModal: null
            }
        },

        methods: {
            closeModal(evt) {
                if(evt.target.classList.contains('modal')) {
                    this.$emit('close');
                }
            }
        },

        watch: { 
            isOpened: function(newVal) {
                this.isModalOpened = !this.isModalOpened;
            },

            active: function(newVal) {
                this.activeModal = newVal;
            }
        }
    }
</script>

<style lang="scss">
    .modal {
        position: fixed;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100vw;
        height: 100vh;
        background-color: rgba(51, 181, 188, 0.7);
        z-index: 105;
    }

    .modal-container {
        @extend .flex-centered-content;
        padding: 30px;
        background-color: var(--white);
        position: relative;

        width: 95%;
        max-width: 600px;
        border-radius: 20px;
    }
    .modal-content {
        @extend .flex-centered-content;
        flex-direction: column;
        svg {
            fill: var(--primary);
            margin-bottom: 25px;
        }

        p {
            font-weight: 500;
            font-size: 20px;
            text-align: center;
        }
    }

    .modal-close {
        position: absolute;
        top: 15px;
        right: 15px;

        svg {
            fill: var(--dark);
        }

        cursor: pointer;
    }
</style>