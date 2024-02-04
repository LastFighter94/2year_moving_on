import {useModalWindowsStore} from "@/layout/modalWindowsLogic/modalWindowsStore";

const modalWindowsStore = useModalWindowsStore()

export const runIfError = (errStatus) => {
    modalWindowsStore.setErrorStatus(errStatus)
    modalWindowsStore.setShowOverlay(true)
    modalWindowsStore.setShowErrorModal(true)
}
