<script setup>
import {ref} from "vue";
import LoginModalContent from "@/layout/modalWindowsLogic/loginAndRegister/loginModalContent.vue";
import RegisterModalContent from "@/layout/modalWindowsLogic/loginAndRegister/registerModalContent.vue";

defineOptions({
    name: 'LoginAndRegisterModalWrapper',
})

const props = defineProps(['modalTitle'])

const {
    modalTitle
} = props

let titleLogin = 'Вход в личный кабинет'
let titleRegister = 'Регистрация'

// const title = ref('')
//
// if (modalTitle === titleLogin) title.value = titleLogin
// if (modalTitle === titleRegister) title.value = titleRegister

</script>

<template>
  <div class="login-register-wrapper">
      <div class="close-modal">
          <span>&nbsp;</span> <span @click="$emit('closeModal')">&#10005;</span>
      </div>
      <span class="modal-title">{{modalTitle}}</span>
      <hr class="hr-modal"/>

      <div class="content-modal">
          <template v-if="modalTitle === 'Вход в личный кабинет'">
              <login-modal-content/>
          </template>

          <template v-if="modalTitle === 'Регистрация'">
              <register-modal-content/>
          </template>
      </div>

      <div class="other-services-div">
          <span class="other-services-text">Вход через сторонние сервисы</span>

          <div class="services">
              <i class="fab fa-google"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-vk"></i>
          </div>
      </div>
  </div>
</template>

<style>
input[type=text], input[type=password] {
    width: 100%;
    padding: 10px;
}

.inputAuth {
    margin-top: 15px;
}

.main-btn {
    color: #fff;
    background-color: #17a2b8;
    padding: 15px;
    border: 0;
    border-radius: 30px;
    font-size: 20px;
}
</style>

<style lang="scss" scoped>
.login-register-wrapper {
  background: #ffffff;
  width: 350px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

@media (max-width: 400px){
    .login-register-wrapper {
        width: 300px;
        text-align: center;
    }
}

.close-modal {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.modal-title {
  color: var(--color-dark);
  font-size: 23px;
  font-weight: 600;
}

.hr-modal {
  width: 100%;
  height: 2px;
  margin-top: 10px;
}

.content-modal {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 20px;
  align-items: center;
  padding-bottom: 30px;
}

.other-services-div {
  display: flex;
  flex-direction: column;
}

.other-services-text {
  color: #6c757d;
  font-size: 19px;
  margin-bottom: 20px;
}

.services {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
