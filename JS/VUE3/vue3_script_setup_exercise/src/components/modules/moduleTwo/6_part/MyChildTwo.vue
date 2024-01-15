<script setup lang="ts">
const {modelValue} = defineModel<{modelValue: number}>()

const onClick = () => {
    modelValue.value++
}
</script>

<template>
    <div>
        Hello from child 2
        <p>{{modelValue}}</p>
        <button @click="onClick">Click</button>
    </div>
</template>

<style scoped>

</style>
