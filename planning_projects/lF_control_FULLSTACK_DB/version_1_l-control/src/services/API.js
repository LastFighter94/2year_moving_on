import axios from "axios";

export const API = async (request, action, module, method) => {
    const headersTypes = {
        application: {"Content-Type": "application/json"}
    }

    let domain

    if (location.hostname === 'localhost') {
        domain = 'http://localhost:5000/api/';
    } else if (location.hostname === '127.0.0.1'){
        domain = 'http://localhost:5000/api/';
    } else {
        domain = location.origin;
    }

    // ******************************
    let actions = {
        days: {
            POST: [''],
            GET: []
        },
        allModules: {
            POST: ['set-document-structure', 'add-row', 'update-row'],
            GET: [
                'get-table-headers',
                'get-all-rows',
                'get-table-title',
                'get-table-name',
                'get-document-structure',
                'get-parent-table-name',
                'is-view'
            ],
            DELETE: [
                'delete-row'
            ],
            UPLOAD: [
                'upload'
            ]
        }
    }

    console.log(request, '!!!!')

    let route = action

    // здесь просто проверка на actions
    if (method === 'POST' && !actions[module].POST.includes(action)) return
    if (method === 'GET' && !actions[module].GET.includes(action)) return
    if (method === 'DELETE' && !actions[module].DELETE.includes(action)) return
    if (method === 'UPLOAD' && !actions[module].UPLOAD.includes(action)) return

    let res = await sendRequest(request.requestParams)

    return res.data

    async function sendRequest(params){
        let link = domain + route;

        console.log(params, 'params')

        // записываем параметры, которые передаем строчкой, если нужно несколько - делим их запятой или как-то иначе (dirty hack)
        if (['GET', 'DELETE'].includes(method) && params !== null){
            if (typeof(params) === 'string') link += `/${params}`
            if (typeof(params) === 'object') Object.keys(params).forEach(key => link += `/${params[key]}`)
        }

        console.log('query_link = ', link)

        if (method === 'POST') return await axios.post(link, params, {headers: headersTypes.application});
        if (method === 'UPLOAD') return await axios.post(link, params);
        if (method === 'GET') return await axios.get(link, params, {headers: headersTypes.application});
        if (method === 'DELETE') return await axios.delete(link, params, {headers: headersTypes.application});
    }
}




