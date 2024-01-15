<script setup lang="ts">
import {ref, useSlots, useAttrs, getCurrentInstance} from "vue";
import {logTs} from "../../../../globHelpers/logTs.ts";

// naming
defineOptions({
    name: 'PartFourChild',
    inheritAttrs: false, // без этого в props тоже попадают только "не атрибуты" (хотя должны попадать только props - если поставить false)
    customOptions: {},
})

const props = defineProps<{
    testProp: Number
}>()

const { testProp } = props

logTs(`${props}, ${testProp}, testing props`)

const inputRef = ref<HTMLInputElement | null>(null)

const focusInput = () => {
    inputRef.value?.focus()
}

defineExpose({
    focusInput
    // ,inputRef
})

const slots = useSlots()
const attrs = useAttrs()

logTs(`${slots}, you can see slots here - expand to see targeted and default slots`)

// проще router использовать - хотя не факт
const componentName = getCurrentInstance()?.type.__name
logTs(`${componentName}, component name`)
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

        <h3>Attrs</h3>

        <p>{{attrs}}</p>

        <h3>Slots</h3>

        <slot name="title"></slot>

        <slot></slot>
    </div>
</template>

<style scoped>

</style>
