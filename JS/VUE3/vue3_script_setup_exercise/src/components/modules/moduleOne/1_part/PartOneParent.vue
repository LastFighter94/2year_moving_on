<script setup>
import {ref, toRefs} from "vue";
import PartOneChild from "./PartOneChild.vue";

// 1
const props = defineProps(['testProp', 'testPropTwo']);
const { testProp, testPropTwo } = toRefs(props);
// console.log(testProp.value, testPropTwo.value)

// 2
// const {testProp, testPropTwo} = defineProps(['testProp', 'testPropTwo'])
// console.log(testProp, testPropTwo)

// 3
// const props = defineProps(['testProp', 'testPropTwo']);
// console.log(props.testProp, props.testPropTwo)

const test = (val) => {
    console.log(val, 'this emit')
    testVar.value = val
}

const testTwo = (val) => {
    console.log(val, 'this emit 2')
    testVar.value = val
}

const testVar = ref(0)

</script>

<template>
    <ChildWrapper>
        <PartOneChild :name="'Mike'" :age="29" @testEmit="(val) => test(val)" @testEmitTwo="(val) => testTwo(val)"/>
    </ChildWrapper>
</template>

<style scoped>

</style>
