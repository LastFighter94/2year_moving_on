import axios from "axios";
import md5 from 'js-md5'

export const defaultRequestParams:requestParams = {
    tableId: "default",
    values: "default",
    clear_cache: false,
    action: "default",
    persist: true,
    apiFunctionLink: "default"
}
interface requestParams {
    tableId: string
    values: string
    clear_cache: boolean
    action: string
    persist: boolean
    apiFunctionLink: string
}

export const API = async (requestParams: requestParams) => {
    const headersType = {
        multipart: {'Content-Type': 'multipart/form-data'},
        application: {"Content-Type": "application/json"}
    }

    let domain

    if (location.hostname === 'localhost') {
        domain = 'http://lst02.camco';
        // domain = 'http://10.15.48.5';
        // domain = 'https://sioprweb.mos.ru'
    } else {
        domain = location.origin;
    }

    let link_extractor = domain + "/api/extractor.php";

    const errorState = (new_data) => {
        return typeof new_data.data === 'string'
            && new_data.data.indexOf('SQL Error') !== -1
            && (location.hostname === 'localhost' || location.hostname === 'lst02.camco')
    }

    const errLog = (text) => console.error(text)

    // ******************************

    if (requestParams.apiFunctionLink === "default") return await selectQv(requestParams)
    else return await multipartHeaders(requestParams)

    async function multipartHeaders(requestParams){
        let new_data
        let link = domain + requestParams.apiFunctionLink;

        console.log('query_lik = ', link)

        new_data = await axios.post(link, requestParams, {headers: headersType.multipart});
        if (errorState(new_data)) errLog(new_data.data)

        console.log(new_data);
        return new_data.data;
    }

    async function selectQv(requestParams){
        let new_data

        let array_query = {
            TableID: requestParams.tableId,
            params: requestParams.values,
            actions: requestParams.action
        }

        let sendJson = JSON.stringify(array_query);
        console.log(sendJson);

        if (requestParams.clear_cache) sessionStorage.clear();

        if (sessionStorage.getItem(md5(sendJson))) {
            console.log("Получаем из сохраненного")
            new_data = JSON.parse(sessionStorage.getItem(md5(sendJson)) || '');
        } else {
            new_data = await axios.post(link_extractor, sendJson, {headers: headersType.application})
            if (errorState(new_data)) errLog(new_data.data)
            if (requestParams.persist) sessionStorage.setItem(md5(sendJson), JSON.stringify(new_data))

            console.log(new_data);
        }

        return new_data.data;
    }
}