<template>
    <div class="search__input">
        <svg @click="showSearchBar = true" v-if="!showSearchBar" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4659 15.1114C16.3023 14.0298 16.8 12.6729 16.8 11.1998C16.8 7.66518 13.9346 4.7998 10.4 4.7998C6.86538 4.7998 4 7.66518 4 11.1998C4 14.7344 6.86538 17.5998 10.4 17.5998C11.8848 17.5998 13.2515 17.0942 14.3374 16.2457L17.0481 18.9741C17.3595 19.2875 17.866 19.2892 18.1794 18.9778C18.4929 18.6664 18.4945 18.1599 18.1831 17.8464L15.4659 15.1114ZM10.4 15.9998C7.74903 15.9998 5.6 13.8508 5.6 11.1998C5.6 8.54884 7.74903 6.39981 10.4 6.39981C13.051 6.39981 15.2 8.54884 15.2 11.1998C15.2 13.8508 13.051 15.9998 10.4 15.9998Z" fill="white"/>
        </svg>

        <div class="search-input-div" v-if="showSearchBar">
            <svg @click="hideSearchBar" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="6" stroke="#BEC6CD" stroke-width="2"/>
                <path d="M19 19L15.5 15.5" stroke="#BEC6CD" stroke-width="2" stroke-linecap="round"/>
            </svg>

            <input placeholder="Поиск" v-model="searchText" @input="findMatches(store.state.layoutModule.menu[0])" class="search-input" type="text"/>
        </div>
    </div>

    <CustomSelect
            :position="{top: '48px', width: '332px'}"
            :logicScope="'HeaderSearchBar'"
            :values="values"
            @closeSelect="() => values = []"
            v-on-click-outside="() => values = []"
    />
</template>

<script lang="ts" >export default {name: 'HeaderSearchBar'}</script>

<script lang="ts" setup>
import CustomSelect from "@/UI/CustomSelect/Index.vue";
import {ref} from "vue";
import { vOnClickOutside } from '@vueuse/components' // импорт может гореть серым, потому что он используется как директива на компоненты
import store from "@/store";

let showSearchBar = ref(false)
let values: ref<any> = ref([])
let searchText = ref('')

const hideSearchBar = () => {
    showSearchBar.value = false
    values.value = []
}

const findMatches = (menu) => {
    let result = []

    if (searchText.value === "") {
        values.value = []
        return
    }

    menu.forEach(menuItem => {
        if (menuItem.groups) {
            let arr = findMatches(menuItem.groups)
            arr?.forEach(itemArr => {result.push(itemArr)})
        }

        if (menuItem.title.toLowerCase().includes(searchText.value.toLowerCase())
            && !menuItem.groups && menuItem.type !== 'map'
        ) {
            result.push(menuItem)
        }
    })

    values.value = result

    return result;
}


</script>

<style lang="scss" scoped>
.search__input {
    display: flex;
    align-items: center;

    .search-input-div {
        background-color: #ffffff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 1px 2px;
    }

    .search-input {
        display: flex;
        align-items: center;
        width: 300px;
        padding: 6px 11px 6px 11px;
        font-size: 13px;
        outline: none;
        line-height: 18px;
        max-height: none;
        color: #333!important;
        background-color: #ffffff;
    }
}
</style>
