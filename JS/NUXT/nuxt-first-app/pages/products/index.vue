<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
<!--                <NuxtLink :to="`/products/${p.id}`">{{p.title}}</NuxtLink>-->
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const {data: products} = await useFetch('https://fakestoreapi.com/products')
// layouts names does not have to be perfectly matched!

definePageMeta({
    layout: 'products'
})

useHead({
    title: 'Different title',
    meta: [
        { name: 'description', content: 'DIFFERENT CONTENT'}
    ]
})

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
