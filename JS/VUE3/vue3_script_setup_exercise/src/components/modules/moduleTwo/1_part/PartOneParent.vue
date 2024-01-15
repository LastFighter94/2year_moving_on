<script setup lang="ts">
import {ref, toRefs} from "vue";
import PartOneChild from "./PartOneChild.vue";
import {logTs} from "../../../../globHelpers/logTs.ts";

// 1
const props = defineProps<{
    testProp: Number[],
    testPropTwo: String
}>()

const { testProp, testPropTwo } = toRefs(props);
logTs(`${testProp.value}, ${testPropTwo.value}`)

const test = (val: Number): void => {
    logTs(`${val}, this emit`)
    testVar.value = val
}

const testTwo = (val: Number): void => {
    logTs(`${val}, this emit 2`)
    testVar.value = val
}

const testVar = ref<Number>(0)

</script>

<template>
    <ChildWrapperTs>
        <PartOneChild :name="'Mike'" :age="29" @testEmit="(val) => test(val)" @testEmitTwo="(val) => testTwo(val)"/>
    </ChildWrapperTs>
</template>

<style scoped>

</style>
