<script setup lang="ts">
// https://vuejs.org/api/composition-api-lifecycle
// https://learnvue.co/articles/vue-lifecycle-hooks-guide

import {
    ref,
    shallowRef,
    onMounted,
    onUpdated,
    onUnmounted,
    onBeforeMount,
    onBeforeUpdate,
    onBeforeUnmount,
    onErrorCaptured, onRenderTracked, onRenderTriggered, DebuggerEvent
} from 'vue'
import ChildWrapper from "@/components/componentWrappers/ChildWrapper.vue";
import * as NamedSpacedComponents from '@/components/namedSpacedComponents/namedSpacedComponents.js'

import TabOneKeepAliveExampleOptionsAPI from "@/components/modules/moduleOne/3_part/TabOneKeepAliveExampleOptionsAPI.vue";
import TabTwoKeepAliveExampleOptionsAPI from "@/components/modules/moduleOne/3_part/TabTwoKeepAliveExampleOptionsAPI.vue";
import {logTs} from "../../../../globHelpers/logTs.ts";

defineOptions({
    name: 'PartThreeChild',
    components: {
        TabOneKeepAliveExampleOptionsAPI, TabTwoKeepAliveExampleOptionsAPI
    },
})

const tabs = ref<string[]>(['TabOneKeepAliveExampleOptionsAPI', 'TabTwoKeepAliveExampleOptionsAPI'])
const currentComponent = ref<string>('TabOneKeepAliveExampleOptionsAPI')

// https://stackoverflow.com/questions/64897835/what-is-an-equivalent-of-created-in-the-vue-js-composition-api
logTs('created')

const el = ref()

let intervalId

onBeforeMount(() => logTs('onBeforeMount *** onBeforeMount return!'))

onMounted((): void => {
    // ERROR - специально (убираем try - catch, и ошибка летит в родительский компонент в hook - onErrorCaptured)
    // а также выше (можно закомментировать в родительском компоненте onErrorCaptured при желании) в обертку
    // - специально созданный компонент ErrorBoundary (убрать try - catch чтобы сработало)
    // ReferenceError: x is not defined

    // try {
    //     let x
    //     x = x.filter(i => i !== 0)
    //     logTs('test')
    // } catch(error){
    //     console.error('Специально сгенерированная ошибка ##', error)
    // }

    logTs(`${el.value}, 10000`) // <div>Child Part Three</div>

    logTs('onMounted *** Registers a callback to be called after the component has been mounted.')

    intervalId = setInterval(() => {
        logTs('some js code - to test onUnmounted hook - click toggle child three display button')
    }, 1000)
})

const count = ref<number>(0)

onBeforeUpdate((): void => logTs('onBeforeUpdate *** onBeforeUpdate hook return!'))

onUpdated((): void => {
    // text content should be the same as current `count.value`
    logTs(document.getElementById('count').textContent)

    logTs('onUpdated *** Registers a callback to be called after the component has updated its DOM tree due to a reactive state change.')
})

onBeforeUnmount((): void => logTs('onBeforeUnmount *** onBeforeUnmount hook return!'))

onUnmounted((): void => {
    logTs('onUnmounted *** Registers a callback to be called after the component has been unmounted.')

    clearInterval(intervalId)
})

// onActivated()
// onDeactivated()

onRenderTracked((event) => {
    logTs('onRenderTracked *** gets called for every reactive dependency that has been tracked.')
    logTs(`${event}, 'onRenderTracked`)
})

onRenderTriggered((event) => {
    logTs('onRenderTriggered *** gets called before onBeforeUpdate hook!')
    logTs(`${event}, 'onRenderTriggered`)
})
</script>

<template>
    <div ref="el">Child Part Three</div>

    <p>
        <button id="count" @click="count++">{{ count }}</button>
    </p>

    <ChildWrapper :wrapperColor="'blue'" :propToTestPropsValidation="'success'">
        <h3>Keep Alive (example) - рабочий пример из options API</h3>

        <p>Значения в input и отображения ref переменной в шаблоне по v-model из input - сохраняются</p>

        <button v-for="tab in tabs" :key="tab" @click="currentComponent = tab">
            {{tab}}
        </button>

        <keep-alive>
            <component :is="currentComponent"/>
        </keep-alive>
    </ChildWrapper>

    <!-- https://github.com/vuejs/docs/issues/1267 -->

    <NamedSpacedComponents.Input/>
    <NamedSpacedComponents.Label/>
</template>

<style scoped>

</style>
