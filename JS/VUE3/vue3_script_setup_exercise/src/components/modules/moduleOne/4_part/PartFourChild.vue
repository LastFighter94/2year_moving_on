<script>
export default {
    inheritAttrs: false
}
</script>

<script setup>
import {ref, useSlots, useAttrs, getCurrentInstance} from "vue";

// naming
defineOptions({
    name: 'PartFourChild',
    inheritAttrs: false, // без этого в props тоже попадают только "не атрибуты"
    customOptions: {},
})

const props = defineProps({
    testProp: {
        type: Number,
        required: true
    }
})

const { testProp } = props

console.log(props, testProp, 'testing props')

const inputRef = ref(null)

const focusInput = () => {
    inputRef.value.focus()
}

defineExpose({
    focusInput
    // ,inputRef
})

const slots = useSlots()
const attrs = useAttrs()

console.log(slots, 'you can see slots here - expand to see targeted and default slots')

const componentName = getCurrentInstance()?.type.__name
console.log(componentName, 'component name')
</script>

<template>
    <div>
        <h3>Define expose examples</h3>

        <input
            type="text"
            ref="inputRef"
            value="test"
            style="margin-bottom: 10px;"
        />

        <h3>Attrs!</h3>

        <p>{{attrs}}</p>

        <h3>Slots</h3>

        <slot name="title"></slot>

        <slot></slot>
    </div>
</template>

<style scoped>

</style>
