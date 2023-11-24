<template>
  <div class="breadCrumbs" v-if="$route.name !== 'dashboard' && $route.name">
    <router-link to="/dashboard/">
        <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 11L10.6392 5.76368C11.4066 5.05113 12.5936 5.05114 13.361 5.76368L19.0001 11" stroke="#BEC6CD" stroke-width="2" stroke-linecap="round"/>
            <path d="M7 14V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V14" stroke="#BEC6CD" stroke-width="2" stroke-linecap="round"/>
        </svg>
    </router-link>

    <span v-for="breadCrumb in store.state.layoutModule.breadCrumbs" @click="store.commit('layoutModule/setMenuShow', true)">
      <img src="../assets/arrow-small.png" alt="arrow"/> {{breadCrumb.title}}
    </span>
  </div>
</template>

<script lang="ts">export default {name: 'BreadCrumbs'}</script>

<script lang="ts" setup>
import store from "@/store";
</script>

<style lang="scss">
.breadCrumbs {
  padding: 16px 12px 16px 12px;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  span {
    text-decoration: none;
    font-size: 12px;
    color: #767784;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      cursor: auto;
    }
  }

  span:last-child {
    color: #333333;
  }
}
</style>