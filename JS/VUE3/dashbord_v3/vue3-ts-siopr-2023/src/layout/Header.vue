<template>
    <div class="header" @click="store.commit('layoutModule/setMenuShow', false)">
        <div class="header__left-side">
            <v-app-bar-nav-icon color="white" @click.stop="store.commit('layoutModule/setMenuShow', 'toggle')"/>

            <a class="header__left-side__emblem" href="/dashboard/">Егас Сиопр</a>

            <div class="header__left-side__support-text">Служба поддержки пользователей <a href="tel:+74993509099">+7-499-3509099</a> <a href="mailto:siopr@mos.ru">siopr@mos.ru</a> 8:00 - 20:00</div>
        </div>

        <div class="header__right-side">
            <HeaderSearchBar/>
        </div>
    </div>
</template>

<script lang="ts" >export default {name: 'Header'}</script>

<script lang="ts" setup>
import HeaderSearchBar from "@/layout/HeaderSearchBar.vue";
import { useStore } from 'vuex'

const store = useStore()
</script>

<style lang="scss" scoped>
.header {
    background-color: #1A78E2;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 66px;
    z-index: 10;
    height: 48px;

    &__left-side{
        display: flex;
        align-items: center;

        &__emblem {
            font-weight: 500;
            text-transform: uppercase;
            color: white;
            padding: 7px 12px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.15);
            text-decoration: none;
            display: block;
            line-height: 1;
            font-size: 13px;
        }

        &__support-text{
            margin-left: 20px;
            font-size: 12px;
            color: white;
        }

        a {
            color: white!important;
            text-decoration: none;
        }
    }

    &__right-side {
        color: white;
        display: flex;
    }
}
</style>