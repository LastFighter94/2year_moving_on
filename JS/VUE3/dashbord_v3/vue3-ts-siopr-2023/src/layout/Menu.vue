<template>
<!--  v-dialog легко заменим на кастомный div с нужными свойствами  -->
      <v-dialog
              v-model="isMenuShow"
              :fullscreen="true"
              @click="close"
              transition="dialog-left-transition"
      >
          <div class="menu-wrapper">
              <div class='menu-container' v-for="container in menu">
                  <ul>
                      <SingleItem
                              @click="store.dispatch('layoutModule/open_item', item)"
                              v-for="item in container" :key="item.id"
                              :item="item"
                      />
                  </ul>

                  <ul>
                      <FolderItem
                              @click="store.dispatch('layoutModule/open_folder', item)"
                              v-for="item in container" :key="item.id"
                              :item="item"
                      />
                  </ul>
              </div>
          </div>
      </v-dialog>
</template>

<script lang="ts">export default {name: 'Menu'}</script>

<script lang="ts" setup>
import FolderItem from "@/layout/menuItems/FolderItem.vue";
import SingleItem from "@/layout/menuItems/SingleItem.vue";

import {computed} from "vue";
import store from "@/store";

const isMenuShow = computed(() => store.getters["layoutModule/isMenuShow"]);
const menu = computed(() => store.getters["layoutModule/menu"]);

const close = (e) => {if (e.target.className === 'v-overlay__content') store.commit('layoutModule/setMenuShow', false)}
</script>

<style lang="scss">
.v-overlay-container {
  .v-overlay__scrim {
    margin: 0;
    top: 48px
  }

  .v-dialog > .v-overlay__content {
    margin: 48px 0 0 0;
    display: flex;
    flex-direction: row;
    left: 0;
    height: 100%;
  }

  .menu-wrapper {
    display: flex;
    height: 100%;
    background-color: white;

    .menu-container {
      width: 308px;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: white;
      min-width: 308px;
      font-size: 15px;
      border: 1px solid #DFE4EE;
      padding: 17px 0 17px 8px;
      margin-bottom: 40px;
    }
  }
}
</style>