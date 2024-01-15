<script setup>
import {ref} from "vue";

const {name, age} = defineProps(['name', 'age'])
const emit = defineEmits(['testEmit', 'testEmitTwo'])

// const emit = defineEmits({
//     testEmit(id){
//         // любая другая логика без warnings на возврат
//         if (id > 100){
//             console.log('logic 1')
//         } else {
//             console.log('logic 2')
//         }
//
//         // чтобы не сыпались warnings
//         return true
//     },
//
//     testEmitTwo(id){
//         // если (type: boolean) и возврат false, то отображается предупреждение
//         // можно - сделать любую другую логику по собственному желанию
//         return id > 100;
//     }
// })

const action = (id) => {
    emit('testEmit', id);
}

const actionTwo = (id) => {
    emit('testEmitTwo', id);
}

const testVar = ref(10)
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
