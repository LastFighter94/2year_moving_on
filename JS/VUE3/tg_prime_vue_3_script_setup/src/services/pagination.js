import {computed, ref} from "vue";

export const paginationLogic = (data) => {
    const itemsPerTable = ref(5)
    const currentPage = ref(1)
    const lastPage = ref(0)

    const countLastPage = (num, dataRows) => {
        if (num > dataRows.length || +num === +dataRows.length) {
            lastPage.value = 1
        }
        if (num < dataRows.length) {
            if (dataRows.length % num === 0) lastPage.value = +(dataRows.length / num)
            if (dataRows.length % num !== 0) lastPage.value = +(dataRows.length / num).toFixed() + 1
        }
    }

    countLastPage(itemsPerTable.value, data.value,)

    const paginate = (page) => {
        // двойные проверки понадобятся для исключения повторного запроса если мы уже находится
        // на нужной странице, а также чтобы не нарушать границы номеров страниц
        if (page === 'first_page'){
            if (currentPage.value !== 1) currentPage.value = 1;
        }

        if (page === 'last_page'){
            if (lastPage.value !== currentPage.value) currentPage.value = lastPage.value;
        }

        if (page === 'prev'){
            if (currentPage.value > 1) currentPage.value--
        }

        if (page === 'next'){
            if (currentPage.value < lastPage.value) currentPage.value++
        }
    }

    const dataRowsPerPage = computed(() => {
        return JSON.parse(JSON.stringify(data.value)).splice((currentPage.value - 1) * itemsPerTable.value, itemsPerTable.value)
    })

    return {
        itemsPerTable, currentPage, paginate, dataRowsPerPage
    }
}
