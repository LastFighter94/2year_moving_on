<template>
    <li
        v-if="!item.groups || !item.groups.length"
        :class="isLinkActive(item) ? 'menu-link active' : 'menu-link'"
        @click="goToRoute(item)"
    >
        <span></span>{{item.title}}
    </li>
</template>

<script lang="ts">export default {name: 'SingleItem'}</script>

<script lang="ts" setup>
import {toRefs} from "vue";
import {useRouter} from "vue-router";
import store from "@/store";
import {menuItem} from "@/layout/Store/types.ts";

const props = defineProps<{ item: menuItem }>();

let { item } = toRefs(props);

const router = useRouter()

let activeLinkItem = store.state.layoutModule.activeLinkItem

function goToRoute(item){
    if (item.type === "map") console.log('логика для открытия проекта, к коду которого нет доступа')

    router.push({
        name: item.type,
        params: {id: item.form_id},
        query: {rel_id: item.rel_form_id, variant: item.variant, title: item.title}
    })

    store.commit('layoutModule/setMenuShow', false)
    store.commit('layoutModule/setActiveItem', item)
}

const isLinkActive = (item) => {
    return item.title === activeLinkItem.title && item.rel_form_id === activeLinkItem.rel_form_id && item.form_id === activeLinkItem.form_id &&
        item.type === activeLinkItem.type;
}
</script>

<style lang="scss">
.menu-link{
    color: #000000;
    text-decoration: none;
    position: relative;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
    padding: 8px 16px 8px 6px;
    display: flex;
    align-items: center;

    span {
        display: inline-block;
        background-color: #DFE4EE;
        height: 5px;
        width: 5px;
        border-radius: 8px;
        margin-right: 7px;
        margin-left: 7px;
    }
}

.menu-link.active {
    background-color: #EEF3FA;
}

.menu-link:hover{
    background: #EEF3FA;
}
</style>