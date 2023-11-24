<template>
    <v-app class="app">
        <Header/>

        <Menu/>

        <section class="content">
            <BreadCrumbs/>
            Content

<!--            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->
<!--            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->
<!--            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->
<!--            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->

            <router-view/>
        </section>

        <Footer/>
    </v-app>
</template>

<script lang="ts">export default {name: 'App'}</script>

<script lang="ts" setup>
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
import Menu from "@/layout/Menu.vue";
import BreadCrumbs from "@/layout/BreadCrumbs.vue";

import store from "@/store";

import {watch} from "vue";
import {useRoute} from "vue-router";
import {API, defaultRequestParams} from "@/services/API.ts";

const route = useRoute()

watch(
    () => route.params.id || route.query.variant,
    () => {
        store.dispatch('layoutModule/setMenuData').then(() => {
            // todo *** Backend function - setInitialBreadCrumbs - вызов
            store.commit('layoutModule/setInitialBreadCrumbs', {routeId: route.params.id, title: route.query.title})

            // todo *** Backend function - updateActiveItems - вызов
            store.dispatch('layoutModule/updateActiveItems', route.query.title)
        })

        store.commit('layoutModule/setPageName', route.query.title)
    }
)

</script>

<style lang="scss">
// app layout main styles
.app {
  display: flex;
  flex-direction: column;

  .content {
    padding: 0 66px;
    flex: 1 1 auto;
    overflow-y: auto;
    max-width: 100%;
    position: relative;
    background-color: #edf2fb;
  }
}
</style>