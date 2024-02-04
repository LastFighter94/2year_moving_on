<template>
    <div class="container content">
        <span class="page-title md-mg-b-30">Управление аккаунтами</span>

        <div class="input-div md-mg-b-40">
            <input type="text" placeholder="Поиск по ключу или почте">

            <img src="@/assets/svg/search.svg" alt="">
        </div>

        <template v-if="initDataLoading">
            <template v-for="accountData in dataRowsPerPage">
                <AdminPanelAccountCard :accountData="accountData" :headers="headers"/>
            </template>
        </template>
    </div>

    <div class="container">
        <Pagination @paginate="(pageVal) => paginate(pageVal)" :items-per-table="itemsPerTable" :data="data" class="jc-space-between md-mg-b-10 w-100p">
            {{currentPage}}
        </Pagination>
    </div>
</template>

<script setup>
import AdminPanelAccountCard from "@/views/adminPanel/adminPanelAccounts/AdminPanelAccountCard.vue";
import {headersAndDataById} from "@/views/adminPanel/headersAndDataById";
import {paginationLogic} from "@/services/pagination";
import Pagination from "@/components/Pagination.vue";

defineOptions({
    name: 'adminPanelAccounts'
})

const {headers, data, initDataLoading} = await headersAndDataById(1)

console.log(headers.value, data.value, 'got data')

// pagination
const {itemsPerTable, currentPage, paginate, dataRowsPerPage} = paginationLogic(data)
</script>
