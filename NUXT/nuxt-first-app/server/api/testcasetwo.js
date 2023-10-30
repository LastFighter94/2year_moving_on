export default defineEventHandler(async (event) => {

    // useQuery (was)
    const {name} = getQuery(event)

    // handle post data
    const {age} = await readBody(event)

    return {
        message: `hello test case ${name} - ${age}!`
    }
})
