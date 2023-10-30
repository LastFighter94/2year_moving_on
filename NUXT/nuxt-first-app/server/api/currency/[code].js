export default defineEventHandler( async (event) => {


    // context.params - grabs any route params in the request path
    let { code } = event.context.params

    code = code.split('&')

    const {currencyKey} = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code[0]}&base_currency=${code[1]}`

    const {data} = await $fetch(uri)

    return data
})
