<script setup>
import {ref} from "vue";

const post = ref({
    id: -1,
    title: '',
    body: ''
})

await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        if (data.id === undefined){
            throw new Error('Асинхронный компонент не получил id!')
        }
        post.value.id = data.id
        post.value.title = data.title
        post.value.body = data.body
    })
</script>

<template>
  <div>
      <h3>{{post.id}} | {{post.title}}</h3>

      <p>{{post.body}}</p>
  </div>
</template>

<style scoped>
</style>
