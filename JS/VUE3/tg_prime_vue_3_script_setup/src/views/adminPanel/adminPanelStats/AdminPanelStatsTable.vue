<script setup>
import {computed, ref, watch} from "vue";
import {headersAndDataById} from "@/views/adminPanel/headersAndDataById";
import CustomSelect from "@/layout/uiKit/customSelect.vue";
import {paginationLogic} from "@/services/pagination";
import Pagination from "@/components/Pagination.vue";

defineOptions({
    name: 'AdminPanelStatsTable',
})

// можно вынести эту функцию
const sortByKey = (key, action, data, desktop = false) => {
    if (action === null) return

    let condition;

    // asc - возрастание, desc - убывание
    if (action === 'asc') condition = (field1, field2) => field1[key] > field2[key]
    if (action === 'desc') condition = (field1, field2) => field1[key] < field2[key]

    data.sort((field1, field2) => condition(field1, field2) ? 1 : -1)

    if (desktop){
        headers.value.forEach(i => {
            i.activeSort = false
            i.upOrDown = ''
        })

        let neededHeader = headers.value.find(i => i.realKey === key)

        neededHeader.activeSort = true
        neededHeader.upOrDown = action
    }
}

const props = defineProps(['tableId'])

const {
    tableId
} = props

const tableName = ref('')
const sortOptions = ref({
    key: '',
    upOrDown: '',
    values: []
})

if (tableId === 3) tableName.value = 'Статистика по месяцам (лицензии)'
if (tableId === 4) tableName.value = 'Статистика по месяцам (модули)'
if (tableId === 5) tableName.value = 'Статистика по ключам (лицензии)'
if (tableId === 6) tableName.value = 'Статистика по селлерам (модули)'

const {headers, data, initDataLoading} = await headersAndDataById(tableId)

sortOptions.value.values.push({value: 'Сортировка по умолчанию', selected: true, realKey: 'defaultSort'})

headers.value.forEach(i => {
    i.activeSort = false
    i.upOrDown = ''

    sortOptions.value.values.push({
        realKey: i.realKey,
        value: i.rusTitle,
        selected: false
    })
})

watch(
    () => sortOptions.value,
    (newSortOptions) => {
        sortOptions.value.key = newSortOptions.values.find(i => i.selected === true).realKey

        if (sortOptions.value.upOrDown !== '') sortByKey(sortOptions.value.key, sortOptions.value.upOrDown, data.value)
    },
    { deep: true }
)

const hasEditIconDiv = (header) => {
    let conditionOne = ['product_ref', 'product_amount', 'payment_type'].includes(header.realKey)
    let conditionTwo = (tableId === 6 && ['clonner_counting', 'reporter_counting', 'spy_counting', 'clonner_channel_counting'].includes(header.realKey))

    return conditionOne || conditionTwo
}

// pagination
const {itemsPerTable, currentPage, paginate, dataRowsPerPage} = paginationLogic(data)
</script>

<template>
    <div class="table-stat-wrapper md-mg-b-20">
        <span class="page-title md-p-l-30 md-mg-b-30">{{ tableName }}</span>

        <div class="stats-search-and-buttons md-mg-b-20">
            <div class="input-div">
                <input type="text" placeholder="Поиск по ключу или почте">

                <img src="@/assets/svg/search.svg" alt="">
            </div>

            <div class="action-btns">
                <button class="square-btn dark-bg md-mg-l-10">Copy</button>
                <button class="square-btn dark-bg md-mg-l-10">Exel</button>
                <button class="square-btn dark-bg md-mg-l-10">Csv</button>
                <button class="square-btn dark-bg md-mg-l-10">PDF</button>
            </div>
        </div>

        <div class="overflow-wrapper">
            <table class="data-table">
                <thead>
                    <tr>
                        <td v-for="header in headers" :class="header.realKey === 'sell_id' && 'minWidthAuto'">
                            <div style="display: flex; width: 100%; justify-content: space-between">
                                {{header.rusTitle}}

                                <div style="display: flex; flex-direction: column;">
                                    <img
                                        src="@/assets/svg/arrow-up.svg"
                                        @click="sortByKey(header.realKey, 'asc', data, true)"
                                        alt=""
                                        :class="(header.activeSort === true && header.upOrDown === 'asc') ? 'active-sort' : ''"
                                    >

                                    <img
                                        src="@/assets/svg/arrow-down.svg"
                                        @click="sortByKey(header.realKey, 'desc', data, true)"
                                        alt=""
                                        :class="(header.activeSort === true && header.upOrDown === 'desc') ? 'active-sort' : ''"

                                    >
                                </div>
                            </div>
                        </td>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="row in dataRowsPerPage">
                        <td v-for="header in headers" :class="header.realKey === 'sell_id' && 'minWidthAuto'">
                            <template v-if="hasEditIconDiv(header)">
                                <div class="jc-space-between">
                                    {{row[header.realKey]}}
                                    <img src="@/assets/svg/pencil-box-outline.svg" alt="">
                                </div>
                            </template>

                            <template v-else>
                                {{row[header.realKey]}}
                            </template>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Pagination @paginate="(pageVal) => paginate(pageVal)" :items-per-table="itemsPerTable" :data="data" class="jc-space-between md-mg-t-30 md-mg-b-10 w-100p">
            {{currentPage}}
        </Pagination>
    </div>

    <!-- mobile -->

    <div class="table-stat-wrapper-phone-table md-mg-b-20">
        <span class="table-phone-stat-title">{{ tableName }}</span>

        <div class="input-div md-mg-t-10">
            <input type="text" placeholder="Поиск по ключу или почте">

            <img src="@/assets/svg/search.svg" alt="">
        </div>

        <div class="action-btns md-mg-t-10">
            <button class="square-btn dark-bg">Copy</button>
            <button class="square-btn dark-bg md-mg-l-10">Exel</button>
            <button class="square-btn dark-bg md-mg-l-10">Csv</button>
            <button class="square-btn dark-bg md-mg-l-10">PDF</button>
        </div>

        <div class="sort-div md-mg-b-10 md-mg-t-10">
            <CustomSelect :listValues="sortOptions.values"/>

            <div class="action-btns-phone-tablet">
                <button
                    :class="sortOptions.upOrDown === 'asc' ? 'square-btn dark-bg' : 'square-btn-white white-bg'"
                    @click="sortOptions.upOrDown = 'asc'"
                >
                    По возрастанию
                </button>

                <button
                    :class="sortOptions.upOrDown === 'desc' ? 'square-btn dark-bg' : 'square-btn-white white-bg'"
                    class="md-mg-l-10"
                    @click="sortOptions.upOrDown = 'desc'"
                >
                    По убыванию
                </button>
            </div>
        </div>

        <div class="card md-p-20 md-mg-b-10" v-for="row in dataRowsPerPage">
            <table class="card-phone-tablet">
                <tr v-for="header in headers">
                    <td>{{ header.rusTitle }}</td>
                    <td>{{row[header.realKey]}}</td>
                </tr>
            </table>
        </div>

        <Pagination @paginate="(pageVal) => paginate(pageVal)" :items-per-table="itemsPerTable" :data="data" class="jc-space-between md-mg-t-30 md-mg-b-10 w-100p">
            {{currentPage}}
        </Pagination>
    </div>
</template>

<style>
.active-sort {
    background: rgba(0,0,0,0.3);
}

 .data-table tr > .minWidthAuto {
    min-width: 50px;
}
</style>
