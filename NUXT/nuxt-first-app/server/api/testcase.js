export default defineEventHandler((event) => {

    // useQuery (was)
    const {name, test, testtwo} = getQuery(event)

    return {
        message: `hello test case ${name} ${test} ${testtwo}!`
    }
})
