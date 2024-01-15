<script setup>
import {usePersonData} from "@/components/modules/moduleOne/6_part/hooksExample/hookExample.js";
// import AsyncComponentExample from "@/components/modules/moduleOne/6_part/AsyncComponentExample.vue";
import {defineAsyncComponent, ref} from "vue";
import Loading from "@/components/modules/moduleOne/6_part/Loading.vue";
import Error from "@/components/modules/moduleOne/6_part/Error.vue";
import MyModalForTeleportExample from "@/components/modules/moduleOne/6_part/MyModalForTeleportExample.vue";
import MyChildOne from "@/components/modules/moduleOne/6_part/MyChildOne.vue";
import MyChildTwo from "@/components/modules/moduleOne/6_part/MyChildTwo.vue";

// option 1
// const personData = usePersonData('cool', true)

// option 2
const { personData } = usePersonData('cool', true)

console.log(personData)

const AsyncComponentExample = defineAsyncComponent(() => import("@/components/modules/moduleOne/6_part/AsyncComponentExample.vue"))

// const AsyncComponentExample = defineAsyncComponent({
//     loader: () => import("@/components/6_part/AsyncComponentExample.vue"),
//     loadingComponent: Loading /* shows while loading */,
//     errorComponent: Error /* shows if there's an error */, // НЕ ПОНИМАЮ КАК СДЕЛАТЬ ТАК ЧТОБЫ ERROR-COMPONENT ОТРАБОТАЛ
//     delay: 1000 /* delay in ms before showing loading component */,
//     timeout: 3000 /* timeout after this many ms */,
// })

// CUSTOM DIRECTIVES

const fontSize = ref(20)

// Define model

const state = ref({
    countExample: 0
})
</script>

<template>
    <div>
        Part 6 child

        <p>{{personData}}</p>

        <h3>Suspense</h3>

        <Suspense>
            <template #default>
                <AsyncComponentExample/>
            </template>

            <!-- use slow 3g in network to detect this message (in throttling) -->
            <template #fallback>
                <p>...Loading</p>
            </template>
        </Suspense>

        <h3>Own directives</h3>

        <p v-test-directive-font-size="30">Test Directive</p>
        <p v-test-directive-font-size="fontSize">Increase font size</p>

        <p v-test-directive-font-size-two:large>Arg binding test 1</p>
        <p v-test-directive-font-size-two:small>Arg binding test 1</p>

        <p v-test-directive-font-size-three:argbind.large.red.test="15">Arg binding test 2</p>

        <button @click="fontSize += 10">Increase font size btn</button>

        <h3>Teleport</h3>

        <MyModalForTeleportExample/>

        <p>Модальное окно появится выше (так как overlay не обертывает router-view) - лучшее решение для модального окна
        положить его на верхний уровень и открывать из state manager - здесь просто как пример для teleport</p>

        <h3>Define model</h3>

        <p>{{state.countExample}}</p>

        <!-- $event - here for example - callback can get $event: $event => console.log($event) -->
        <p @click="$event => state.countExample++">click to increment upper countExample</p>

        <ChildWrapper :wrapper-color="'blue'">
            <MyChildOne v-model="state.countExample"/>
        </ChildWrapper>

<!--        <br>-->

<!--        <ChildWrapper :wrapper-color="'green'">-->
<!--            <MyChildTwo v-model="state.countExample"/>-->
<!--        </ChildWrapper>-->
    </div>
</template>

<style scoped>

</style>
