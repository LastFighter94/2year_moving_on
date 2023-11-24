<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus, reprehenderit? Adipisci aut, harum officiis porro repellendus sunt veritatis voluptate?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus, reprehenderit? Adipisci aut, harum officiis porro repellendus sunt veritatis voluptate?</p>
        <div>{{data}}</div>
        <div>{{testTwo.data}}</div>
        <div>{{testThree}}</div>
        <div>{{testEE}}</div>
    </div>
</template>

<script setup>
// const { data } = await useFetch('/api/testcase')
const { data } = await useFetch('/api/testcase?name=yuri&test=123&testtwo=222')

console.log(data)

let testTwo = await useFetch('/api/testcasetwo?name=yuri', {
    method: 'POST',
    body: {age: 30}
})

let testThree = await useFetch('/api/testcasethree')

let testEE = await useFetch('/api/currency/USD&BTC')

// console.log(testEE, 4)

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
