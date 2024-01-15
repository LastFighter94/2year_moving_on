<!-- options API KEEP ALIVE-->

<!--<script>-->
<!--import TabOneKeepAliveExampleOptionsAPI from "@/components/modules/moduleOne/3_part/TabOneKeepAliveExampleOptionsAPI.vue";-->
<!--import TabTwoKeepAliveExampleOptionsAPI from "@/components/modules/moduleOne/3_part/TabTwoKeepAliveExampleOptionsAPI.vue";-->

<!--export default {-->
<!--    name: 'PartThreeChild',-->
<!--    // inheritAttrs: false,-->
<!--    // customOptions: {}-->
<!--    components: {-->
<!--        TabOneKeepAliveExampleOptionsAPI, TabTwoKeepAliveExampleOptionsAPI-->
<!--    },-->
<!--    data(){-->
<!--        return {-->
<!--            tabs: ['TabOneKeepAliveExampleOptionsAPI', 'TabTwoKeepAliveExampleOptionsAPI'],-->
<!--            currentComponent: 'TabOneKeepAliveExampleOptionsAPI'-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->

<script setup>
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
    onErrorCaptured, onRenderTracked, onRenderTriggered
} from 'vue'
import ChildWrapper from "@/components/componentWrappers/ChildWrapper.vue";
import * as NamedSpacedComponents from '@/components/namedSpacedComponents/namedSpacedComponents.js'

// composition API KEEP ALIVE

import TabOneKeepAliveExampleOptionsAPI from "@/components/modules/moduleOne/3_part/TabOneKeepAliveExampleOptionsAPI.vue";
import TabTwoKeepAliveExampleOptionsAPI from "@/components/modules/moduleOne/3_part/TabTwoKeepAliveExampleOptionsAPI.vue";

defineOptions({
    name: 'PartThreeChild',
    components: {
        TabOneKeepAliveExampleOptionsAPI, TabTwoKeepAliveExampleOptionsAPI
    },
})

const tabs = ref(['TabOneKeepAliveExampleOptionsAPI', 'TabTwoKeepAliveExampleOptionsAPI'])
const currentComponent = ref('TabOneKeepAliveExampleOptionsAPI')

// composition API KEEP ALIVE - END

// https://stackoverflow.com/questions/64897835/what-is-an-equivalent-of-created-in-the-vue-js-composition-api
console.log('created')

const el = ref()

let intervalId

onBeforeMount(() => console.log('onBeforeMount *** onBeforeMount return!'))

onMounted(() => {
    // ERROR - специально (убираем try - catch, и ошибка летит в родительский компонент в hook - onErrorCaptured)
    // а также выше (можно закомментировать в родительском компоненте onErrorCaptured при желании) в обертку
    // - специально созданный компонент ErrorBoundary (убрать try - catch чтобы сработало)
    // ReferenceError: x is not defined

    // try {
    //     let x
    //     x = x.filter(i => i !== 0)
    //     console.log('test')
    // } catch(error){
    //     console.error('Специально сгенерированная ошибка ##', error)
    // }

    console.log(el.value) // <div>Child Part Three</div>

    console.log('onMounted *** Registers a callback to be called after the component has been mounted.')

    intervalId = setInterval(() => {
        console.log('some js code - to test onUnmounted hook - click toggle child three display button')
    }, 1000)
})

const count = ref(0)

onBeforeUpdate(() => console.log('onBeforeUpdate *** onBeforeUpdate hook return!'))

onUpdated(() => {
    // text content should be the same as current `count.value`
    console.log(document.getElementById('count').textContent)

    console.log('onUpdated *** Registers a callback to be called after the component has updated its DOM tree due to a reactive state change.')
})

onBeforeUnmount(() => console.log('onBeforeUnmount *** onBeforeUnmount hook return!'))

onUnmounted(() => {
    console.log('onUnmounted *** Registers a callback to be called after the component has been unmounted.')

    clearInterval(intervalId)
})

// onActivated()
// onDeactivated()

onRenderTracked((event) => {
    console.log('onRenderTracked *** gets called for every reactive dependency that has been tracked.')
    console.log(event, 'onRenderTracked')
})

onRenderTriggered((event) => {
    console.log('onRenderTriggered *** gets called before onBeforeUpdate hook!')
    console.log(event, 'onRenderTriggered')
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
