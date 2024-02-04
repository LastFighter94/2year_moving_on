import axios from "axios";

export const API = async (requestParams, action, module, method) => {
    const headersTypes = {
        application: {"Content-Type": "application/json"}
    }

    let domain

    if (location.hostname === 'localhost') {
        domain = 'https://api.agsearch.online/tables/';
    } else if (location.hostname === '127.0.0.1'){
        domain = 'https://api.agsearch.online/tables/';
    } else {
        domain = 'https://api.agsearch.online/tables/'
        // domain = location.origin;
        // этот вариант - когда не с локального хоста
    }

    // ******************************
    let actions = {
        adminPanel: {
            POST: [],
            DELETE: [],
            UPLOAD: [],
            GET: [
                'getadminheaders',
                'getadmindata',
            ],
        },
        personalCabinet: {
            POST: [],
            DELETE: [],
            UPLOAD: [],
            GET: [
                'getheaders',
                'getdata'
            ],
        }
    }

    let route = action

    // здесь просто проверка на actions
    if (method === 'POST' && !actions[module].POST.includes(action)) return
    if (method === 'GET' && !actions[module].GET.includes(action)) return
    if (method === 'DELETE' && !actions[module].DELETE.includes(action)) return
    if (method === 'UPLOAD' && !actions[module].UPLOAD.includes(action)) return

    let res = await sendRequest(requestParams)

    return res.data

    async function sendRequest(requestParams){
        let link

        if (method !== 'POST') link = domain + route;
        else link = 'post link'

        // записываем параметры, которые передаем строчкой, если нужно несколько - делим их запятой или как-то иначе (dirty hack)
        if (['GET', 'DELETE'].includes(method) && requestParams !== null){
            if (['string', 'number'].includes(typeof(requestParams))) link += `/${requestParams}`
            if (typeof(requestParams) === 'object') console.log('какая-нибудь другая мега combo логика!')
        }

        console.log('query_link = ', link)

        if (method === 'POST') {
            return await axios.post(link, requestParams,{headers: headersTypes.application})
            // return null
        }
        if (method === 'UPLOAD') return null
        if (method === 'GET') return await axios.get(link, {headers: headersTypes.application});
        if (method === 'DELETE') return null
    }
}




