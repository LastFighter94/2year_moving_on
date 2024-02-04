import { defineStore } from 'pinia'

export const useModalWindowsStore = defineStore('modalWindowsStore', {
    state: () => {
        return {
            showOverlay: false,
            showPersonalCabinetModalSalesOptions: false,
            showLoginModal: false,
            showRegisterModal: false,
            showErrorModal: false,
            errorStatus: {
                text: '',
                apiRoute: '',
                module: ''
            }
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setShowOverlay(value) {
            this.showOverlay = value
        },
        setPersonalCabinetModalSalesOptions(value) {
            this.showPersonalCabinetModalSalesOptions = value
        },
        setShowLoginModal(value) {
            this.showLoginModal = value
        },
        setShowRegisterModal(value) {
            this.showRegisterModal = value
        },
        setShowErrorModal(value) {
            this.showErrorModal = value
        },
        setErrorStatus(value) {
            this.errorStatus = value
        },
    },
    // getters: {
    //     showOverlayGetter: (state) => state.showOverlay,
    // },
})
