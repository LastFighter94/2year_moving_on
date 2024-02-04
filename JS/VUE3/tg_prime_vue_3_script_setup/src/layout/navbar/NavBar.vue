<template>
    <template v-if="menuFirstRoutes.includes($route.name)">
        <NavBarPersonalCabinetAndIndex/>

        <div :style="marginTop"></div>
    </template>

    <template v-if="menuSecondRoutes.includes($route.name)">
        <NavBarAdminPanel/>

        <div :style="marginTop"></div>
    </template>
</template>

<style lang="scss">

</style>

<script setup>
defineOptions({
    name: 'NavBar'
})

import NavBarPersonalCabinetAndIndex from "@/layout/navbar/NavBarPersonalCabinetAndIndex.vue";
import NavBarAdminPanel from "@/layout/navbar/NavBarAdminPanel.vue";
import {computed} from "vue";
import {useRoute} from "vue-router";

const menuFirstRoutes = ['personalCabinet', 'indexPage']
const menuSecondRoutes = ['adminPanelAccounts', 'adminPanelAccount', 'adminPanelStats', 'adminPanelMessages']

const route = useRoute()

const marginTop = computed(() => {
    if (route.name === 'indexPage') return 'margin-top: 100px;'
    else return 'margin-top: 120px;'
})
</script>
