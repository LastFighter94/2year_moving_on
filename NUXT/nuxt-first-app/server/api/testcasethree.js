export default defineEventHandler(async (event) => {


    let uri = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_EFuiE1C0fguShAQlTTycGp7fPluMEhPXjlt7VJkH&currencies=USD&base_currency=BTC'
    // api call with private key
    // in server routes we use $fetch not use fetch
    const {data} = await $fetch(uri)

    console.log(uri, 111)

    return data
})
