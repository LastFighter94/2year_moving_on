<script setup>
import PartThreeChild from "./PartThreeChild.vue";

import {onErrorCaptured, ref} from "vue"

const showChild = ref(false)

// если нет обертки ErrorBoundary над компонентом, тогда можно раскомментировать код ниже

// onErrorCaptured((err, instance, info) => {
//     console.error('Part Three Parent')
//     console.error('Err ##', err)
//     console.error('Instance ##', instance)
//     console.error('Error Info ##', info)
//     console.error('#######################')
// })

const testVNodeMounted = () => console.log('testVNodeMounted - Parent')

const testVNodeUpdated = () => console.log('testVNodeUpdated - Parent')
</script>

<template>
    <p>
        <button @click="showChild = !showChild">Toggle child display (onUnmounted hook test)</button>
    </p>

    <ChildWrapper v-if="showChild">
<!--
onVnodeBeforeMount
onVnodeMounted
onVnodeBeforeUpdate
onVnodeUpdated
onVnodeBeforeUnmount
onVnodeUnmounted

ПРИМЕЧАНИЕ1!

https://dev.to/the_one/vue-3-tipstricks-i-guarantee-you-didnt-know-49ml

- также как testVNodeMounted, testVNodeUpdated - работают хуки выше - они отрабатывают сразу же после того как отработал
- идентичный хук в дочернем компоненте
-->

<!--
ПРИМЕЧАНИЕ1!
[vite] warning: @vnode-* hooks in templates are deprecated. Use the vue:
prefix instead. For example, @vnode-mounted should be changed to @vue:mounted.
@vnode-* hooks support will be removed in 3.4.
-->
        <PartThreeChild @vue:Mounted="testVNodeMounted" @vue:Updated="testVNodeUpdated"/>
        <!-- читать примечание "ПРИМЕЧАНИЕ1" -->
    </ChildWrapper>
</template>

<style scoped>

</style>
