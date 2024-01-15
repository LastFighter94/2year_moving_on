<script setup lang="ts">

import ModuleOne from "./components/modules/moduleOne/moduleOne.vue";
import ModuleTwo from "./components/modules/moduleTwo/moduleTwo.vue";
import ModuleThree from "./components/modules/moduleThree/moduleThree.vue";
import {ref} from "vue";

// DefineExpose 1
// const moduleThree = ref<InstanceType<typeof ModuleThree> | null>(null)
//
// const testPublicCount = () => {
//     moduleThree.value.test()
//     moduleThree.value.publicCount++
// }

// DefineExpose 2
// const testPrivateCount = () => {
//     moduleThree.value.privateCount.value++
// }
</script>

<template>
    <div class="modules">
        <ModuleOne :ts-info="'No TS'" :description="'Script setup syntax (syntactic sugar)'" :module-number="1"/>
        <ModuleTwo :ts-info="'With TS'" :description="'Script setup syntax (syntactic sugar)'" :module-number="2"/>
        <ModuleThree :ts-info="'TS and NO TS'" :description="'Composition API Classic schema'" :module-number="3" @testEmit="(arg) => console.log(arg)" ref="moduleThree"/>

<!--        DefineExpose 3-->
<!--        <p @click="testPublicCount">+</p>-->
    </div>
</template>

<style scoped>
.modules {
    display: flex;
}
</style>
