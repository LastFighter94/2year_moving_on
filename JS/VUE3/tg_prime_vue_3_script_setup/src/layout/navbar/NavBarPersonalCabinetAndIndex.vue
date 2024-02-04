<script setup>
import {useModalWindowsStore} from "@/layout/modalWindowsLogic/modalWindowsStore";

defineOptions({
    name: 'NavBarPersonalCabinetAndIndex'
})

import {computed, nextTick, ref} from "vue";
import {translateLogic} from "@/services/languagesStore";

const personalCabinet = 'personalCabinet'
const indexPage = 'indexPage'

const scrollTo = async (sectionId) => {
    await nextTick()
    const sectionTwo = document.getElementById('sectionTwo')
    const sectionThree = document.getElementById('sectionThree')
    const sectionFive = document.getElementById('sectionFive')
    const sectionSix = document.getElementById('sectionSix')

    if (menuOpen.value === true) menuOpen.value = false

    const sections = {
        2: sectionTwo.offsetTop - 100,
        3: sectionThree.offsetTop,
        5: sectionFive.offsetTop - 100,
        6: sectionSix.offsetTop - 100,
    }

    window.scrollTo({
        top: sections[sectionId],
        behavior: 'smooth'
    });
}

const menuOpen = ref(false)

const languagesOptionsOpen = ref(false)

// пример использования multi-languages
const {languagesStore, currentLanguage, translated} = translateLogic()

const isAuth = ref(true)



const modalWindowsStore = useModalWindowsStore()

const showModal = (modalName) => {
    modalWindowsStore.setShowOverlay(true)

    if (modalName === 'login') modalWindowsStore.setShowLoginModal(true)
    if (modalName === 'register') modalWindowsStore.setShowRegisterModal(true)
}
</script>

<template>
    <div class="pc-nav">
        <div class="container pc-nav__container color-dark">
            <div>
                <span class="logo">
                    Telegram Prime
                </span>
            </div>

            <div class="pc-desktop-nav-part-one" v-if="$route.name === indexPage">
                <a @click="scrollTo(2)">{{translated('Функции')}}</a>
                <a @click="scrollTo(3)">{{translated('Купить')}}</a>
                <a @click="scrollTo(5)">{{translated('Тарифы')}}</a>
                <a @click="scrollTo(6)">{{translated('Отзывы')}}</a>
<!--                TESTING PURPOSE -->
<!--                <router-link :to="{ name: 'personalCabinet'}"><a>pc</a></router-link>-->
<!--                <router-link :to="{ name: 'indexPage'}"><a>index</a></router-link>-->

            </div>

            <div class="pc-desktop-nav-part-one" v-if="$route.name === personalCabinet">
                <span>{{translated('Лицензии')}}</span>
                <span>{{translated('История')}}</span>
                <span>{{translated('Купить')}}</span>
<!--                TESTING PURPOSE -->
<!--                <router-link :to="{ name: 'personalCabinet'}"><a>pc</a></router-link>-->
<!--                <router-link :to="{ name: 'indexPage'}"><a>index</a></router-link>-->
            </div>

            <div class="pc-desktop-nav-part-two">
                <div class="languages-options-div-wrapper">
                    {{ currentLanguage }}
                    <div class="languages-options-div" v-if="languagesOptionsOpen">
                        <span
                            v-for="lang in languagesStore.arrLanguages"
                            :class="currentLanguage === lang && 'activeLang'"
                            @click="() => {
                                languagesStore.setCurrentLanguage(lang)
                                languagesOptionsOpen = false
                            }"
                        >
                            {{lang}}
                        </span>
                    </div>
                </div>

                <img class="pc-arrow-down" src="@/assets/svg/arrow-down.svg" alt="" v-if="!languagesOptionsOpen" @click="languagesOptionsOpen = true">
                <img class="pc-arrow-up" src="@/assets/svg/arrow-up.svg" alt="" v-if="languagesOptionsOpen" @click="languagesOptionsOpen = false">

                <template v-if="!isAuth">
                    <img class="login-svg" src="@/assets/svg/login.svg" alt="">
                    <span class="light-btn md-mg-l-10">Выйти</span>
                </template>

                <template v-if="isAuth">
                    <button class="auth-btn" @click="showModal('login')">Логин</button>
                    <button class="auth-btn" @click="showModal('register')">Регистрация</button>
                </template>
            </div>

            <div class="pc-nav-part-phone-tablet">
                <img class="burger-white" src="@/assets/svg/close-burger-dark.svg" alt="" v-if="menuOpen" @click="menuOpen = false">
                <img class="burger-white" src="@/assets/svg/burger-dark.svg" alt="" v-if="!menuOpen" @click="menuOpen = true">
                &nbsp;
                RU
                <img class="pc-arrow-down" src="@/assets/svg/arrow-down.svg" alt="">
            </div>
        </div>
    </div>

    <div class="pc-menu" v-if="menuOpen">
        <template v-if="$route.name === indexPage">
            <a @click="scrollTo(2)">Функции</a>
            <a @click="scrollTo(3)">Купить</a>
            <a @click="scrollTo(5)">Тарифы</a>
            <a @click="scrollTo(6)">Отзывы</a>
            <a @click="showModal('login')">Логин</a>
            <a @click="showModal('register')">Регистрация</a>
        </template>

        <template v-if="$route.name === personalCabinet">
            <span><a href="#">{{translated('Лицензии')}}</a></span>
            <span><a href="#">{{translated('История')}}</a></span>
            <span><a href="#">{{translated('Купить')}}</a></span>

            <template v-if="!isAuth">
                <span><a href="#">{{translated('Выйти')}}</a></span>
            </template>

            <template v-if="isAuth">
                <span><a href="#" @click="showModal('login')">Логин</a></span>
                <span><a href="#" @click="showModal('register')">Регистрация</a></span>
            </template>
        </template>
    </div>
</template>

<style scoped>
/* nav logic */

.pc-nav {
    border-bottom: 1px solid var(--color-dark);
    background-color: #fff;

    /* fixed nav - part 1/3 */

    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
}

.pc-nav__container {
    display: flex;
    align-items: center;
    height: 100px;
}

.pc-nav__container > div:not(:last-child){
    width: 33.33%;
}

@media (max-width: 1280px) {
    .pc-nav__container {
        justify-content: space-between;
    }
}

.pc-desktop-nav-part-one {
    text-align: center;
}

.pc-desktop-nav-part-one > span,
.pc-desktop-nav-part-one > a {
    display: inline-block;
    font-weight: 600;
    padding: 10px;
    font-size: 18px;
}

@media (max-width: 1280px){
    .pc-desktop-nav-part-one {
        display: none;
    }
}

.pc-arrow-down, .pc-arrow-up {
    width: 10px;
    height: 10px;
    margin-left: 10px;
}

.login-svg {
    width: 35px;
    height: 35px;
    margin-left: 10px;
}

.pc-menu {
    /* fixed nav - part 2/3 */

    position: fixed;
    width: 100%;
    top: 101px;
    z-index: 100;


    /*display: none;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-dark);
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    background-color: #fff;
    font-size: 18px;
    line-height: 24px;
}

.pc-menu > span,
.pc-menu > a {
    display: block;
    border: 1px solid var(--color-dark);
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
}

@media (min-width: 1280px){
    .pc-menu {
        display: none;
    }
}

@media (max-width: 400px){
    .pc-menu {
        font-size: 14px;
    }

    .pc-menu > span {
        margin: 5px;
    }
}

.pc-desktop-nav-part-two {
    justify-content: end;
    display: flex;
    align-items: center;
}

@media (max-width: 1280px){
    .pc-desktop-nav-part-two {
        display: none;
    }
}

.pc-nav-part-phone-tablet {
    justify-content: center;
    align-items: center;
    display: flex;
}

@media (min-width: 1280px){
    .pc-nav-part-phone-tablet {
        display: none;
    }
}

.light-btn {
    border: 1px solid var(--color-dark);
    border-radius: 15px;
    padding: 5px 10px;
    display: inline-block;
    width: fit-content;
}
</style>

<style scoped>
.languages-options-div-wrapper {
    position: relative;
}

.languages-options-div {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: var(--white-color);
    width: 100px;
    border: 1px solid var(--dark-color);

    > span {
        padding: 5px 0;
    }
}

.activeLang {
    font-weight: 600;
}

.auth-btn {
    padding: 10px;
    border-radius: 10px;
    border: 0;
    margin-left: 5px;
}

.auth-btn:hover {
    cursor: pointer;
}
</style>
