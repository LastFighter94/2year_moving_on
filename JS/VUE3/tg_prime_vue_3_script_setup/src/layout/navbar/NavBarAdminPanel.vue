<script setup>
defineOptions({
    name: 'NavBarAdminPanel'
})

import {ref} from "vue";
import NavBarAdminPanelMenu from "@/layout/navbar/NavBarAdminPanelMenu.vue";

const menuOpen = ref(false)
</script>

<template>
    <div class="nav">
        <div class="container nav__container">
            <span class="logo">Telegram Prime</span>

            <div class="line"></div>

            <span class="admin-panel-title">Панель Администратора</span>

            <img class="burger-white" src="@/assets/svg/close-burger.svg" alt="" v-if="menuOpen" @click="menuOpen = false">
            <img class="burger-white" src="@/assets/svg/burger-white.svg" alt="" v-if="!menuOpen" @click="menuOpen = true">
        </div>
    </div>

    <div class="menu" v-if="menuOpen">
        <NavBarAdminPanelMenu @closeMenu="() => menuOpen = false"/>
    </div>

    <div class="menu-mobile" v-if="menuOpen">
        <NavBarAdminPanelMenu @closeMenu="() => menuOpen = false"/>
    </div>
</template>

<style scoped>

</style>
