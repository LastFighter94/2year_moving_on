<script setup>
import PersonalCabinetTable from "@/views/personalCabinet/components/PersonalCabinetTable.vue";

import {useModalWindowsStore} from "@/layout/modalWindowsLogic/modalWindowsStore";

const modalWindowsStore = useModalWindowsStore()

defineOptions({
    name: 'PersonalCabinet',
})

const showSalesOptions = () => {
    modalWindowsStore.setShowOverlay(true)
    modalWindowsStore.setPersonalCabinetModalSalesOptions(true)
}
</script>

<template>
    <div class="bg-all w-100p">
        <div class="bg-top">
            <img class="bg-all-left" src="@/assets/svg/bg-all-left.svg" alt="">
            <img class="bg-all-right" src="@/assets/svg/bg-all-right.svg" alt="">
        </div>

        <div style="height: 100%;">
            <div style="height: 150px;"></div>
        </div>

        <div style="display: flex;">
            <img class="bg-all-bottom w-100p" src="@/assets/svg/bg-all-bottom.svg" alt="">
        </div>
    </div>

    <div class="container content md-mg-b-20">

        <div class="pc-top-info">
            <div class="card">
                <span class="pc-info-text md-mg-b-20">Персональный кабинет</span>
                Googlepochta@gmail.com
                <span class="pc-info-text md-mg-b-20 md-mg-t-20">Пароль</span>
                <span class="light-btn">Изменить пароль</span>
            </div>

            <div class="card-dark">
                <h2>Хотите приобрести подписку?</h2>
                <span class="f-size-12">Подпишитесь на план, который соответствует размеру вашего бизнеса.</span>
                <span class="watch-sale-options-btn md-mg-t-20" @click="showSalesOptions">Посмотреть тарифы</span>
            </div>
        </div>

        <Suspense v-for="tableId in [1,2]">
            <PersonalCabinetTable :tableId="tableId"/>
        </Suspense>
    </div>
</template>

<style>
.pc-info-text {
    font-size: 18px;
    font-weight: 600;
    display: block;
    color: var(--color-dark);
}

@media (max-width: 400px){
    .pc-info-text {
        font-size: 15px;
    }
}
</style>

<style scoped>
/* bg-logic */

.bg-all {
    display: flex;
    flex-direction: column;
    z-index: -10;
    position: fixed;
    height: 100vh;
    top: 0;
}

.bg-top {
    display: flex;
    flex-direction: row;
}

.bg-all-left,
.bg-all-right {
    width: 35%;
}

.bg-all > div:first-child {
    justify-content: space-between;
}

@media (max-width: 640px){
    .bg-all-left,
    .bg-all-right {
        width: 100%;
    }

    .bg-top {
        display: flex;
        flex-direction: column-reverse;
    }
}

/* CONTENT LOGIC */
/* ------------- */
/* CONTENT LOGIC */

.card-dark {
    border-radius: 15px;
    background: linear-gradient(#421999, #8837C4);
    color: #fff;
}

.card-dark h2 {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
}

.pc-top-info {
    display: flex;
    gap: 40px;
    color: var(--color-dark);
    margin-bottom: 40px;
}

.pc-top-info > div {
    padding: 30px;
}

.pc-top-info > div:first-child {
    width: 70%;
}

.pc-top-info > div:last-child {
    width: 30%;
}

@media (max-width: 570px){
    .pc-top-info {
        flex-direction: column;
    }

    .pc-top-info > div:first-child,
    .pc-top-info > div:last-child {
        width: 100%;
        font-size: 13px;
    }
}

@media (max-width: 640px) {
    .pc-top-info > div:first-child,
    .pc-top-info > div:last-child {
        width: 50%;
        font-size: 13px;
    }
}

@media (max-width: 570px) {
    .pc-top-info > div:first-child,
    .pc-top-info > div:last-child {
        width: 100%;
    }
}

.watch-sale-options-btn {
    display: block;
    background-color: #F0F5FA;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 15px;
    color: var(--color-dark);
}
</style>
