<script setup lang="ts">
import {ref} from "vue";

// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props

// 1 example
// const {name, age} = defineProps<{
//     name: String,
//     age?: Number
// }>()

// 2 example
export interface Props {
    name: String,
    age: Number
}

const {name, age} = defineProps<Props>()

// 1 option
// const emit = defineEmits<{
//     (e: 'testEmit', id: number): void
//     (e: 'testEmitTwo', id: number): void
// }>()

// 2 option
const emit = defineEmits<{
    testEmit: [id: number]
    testEmitTwo: [id: number]
}>()

const action = (id: Number): void => {
    emit('testEmit', id);
}

const actionTwo = (id: Number): void => {
    emit('testEmitTwo', id);
}

const testVar = ref<Number>(10)
</script>

<template>
    <i @click.prevent="action(100)">test emit one</i><br>
    <i @click.prevent="actionTwo(200)">test emit two</i>
    <br>
    <i @click="testVar++">click on it: {{testVar}}</i>

    <div class="test_scss"><span>{{ name }} {{age}}</span></div>
</template>

<style scoped>
.test_scss {
    > span {
        border: 1px solid black;
        display: inline-block;
        padding: 5px;
    }
}
</style>
