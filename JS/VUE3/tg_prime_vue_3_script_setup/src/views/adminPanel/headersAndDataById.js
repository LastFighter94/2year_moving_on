import {API} from "@/services/API";
import {ref} from "vue";

export const headersAndDataById = async (tableId) => {
    let initDataLoading = ref(false)

    let headers = ref([])
    let data = ref([])

    headers.value = await API(tableId, 'getadminheaders','adminPanel', 'GET')
    data.value = await API(tableId, 'getadmindata','adminPanel', 'GET')

    initDataLoading.value = true

    return {
        headers,
        data,
        initDataLoading
    }
}
