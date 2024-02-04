<script setup>
import {computed} from "vue";
import {useModalWindowsStore} from "@/layout/modalWindowsLogic/modalWindowsStore";
import SalesOptionsModal from "@/layout/modalWindowsLogic/salesOptions/salesOptionsModal.vue";
import LoginRegisterModalWrapper from "@/layout/modalWindowsLogic/loginAndRegister/loginRegisterModalWrapper.vue"; // импорт может гореть серым, потому что он используется как директива на компоненты

// не удалять
import { vOnClickOutside } from '@vueuse/components'
import ErrorsModal from "@/layout/modalWindowsLogic/errorsModal/errorsModal.vue";


defineOptions({
    name: 'modalWindowsOverlay',
})

const modalWindowsStore = useModalWindowsStore()

// computed state fields
const isOverlayShowing = computed(() => modalWindowsStore.showOverlay)
const isPersonalCabinetModalSalesOptions = computed(() => modalWindowsStore.showPersonalCabinetModalSalesOptions)
const isLoginModal = computed(() => modalWindowsStore.showLoginModal)
const isRegisterModal = computed(() => modalWindowsStore.showRegisterModal)
const isErrorModal = computed(() => modalWindowsStore.showErrorModal)

const closeModalWindow = (modalWindow) => {
    modalWindowsStore.setShowOverlay(false)

    const modalWindowsCloseFunctions = {
        'personalCabinetSaleOptions': modalWindowsStore.setPersonalCabinetModalSalesOptions,
        'loginModal': modalWindowsStore.setShowLoginModal,
        'registerModal': modalWindowsStore.setShowRegisterModal,
        'errorModal': modalWindowsStore.setShowErrorModal
    }

    if (modalWindow === 'errorModal') modalWindowsStore.setErrorStatus({
        text: '',
        apiRoute: '',
        module: ''
    })

    modalWindowsCloseFunctions[modalWindow](false)
}
</script>

<template>
  <div class="overlay-all" v-if="isOverlayShowing">
      <SalesOptionsModal
              v-if="isPersonalCabinetModalSalesOptions"
              v-on-click-outside="() => closeModalWindow('personalCabinetSaleOptions')"
      />

      <LoginRegisterModalWrapper
              :modalTitle="'Вход в личный кабинет'"
              v-if="isLoginModal"
              v-on-click-outside="() => closeModalWindow('loginModal')"
              @closeModal="() => closeModalWindow('loginModal')"
      />

      <LoginRegisterModalWrapper
              :modalTitle="'Регистрация'"
              v-if="isRegisterModal"
              v-on-click-outside="() => closeModalWindow('registerModal')"
              @closeModal="() => closeModalWindow('registerModal')"
      />

      <!-- модальное окно на какие-либо ошибки -->
      <ErrorsModal
              v-if="isErrorModal"
              v-on-click-outside="() => closeModalWindow('errorModal')"
      />
  </div>
</template>

<style lang="scss">
.overlay-all {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  top: 0;
}
</style>
