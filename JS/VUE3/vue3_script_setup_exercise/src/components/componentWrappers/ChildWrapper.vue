<template>
    <div class="child-wrapper">
        <slot></slot>
    </div>
</template>

<script setup>
import {ref, toRefs} from "vue"

const props = defineProps({
    wrapperColor: {
        type: String,
        default: 'red'
    },
    propToTestPropsValidation: {
        default: 'default',
        required: false,
        type: String,
        validator(value) {
            // The value must match one of these strings
            return ['success', 'warning', 'danger', 'default'].includes(value)
        },
    },
});

console.log(props.propToTestPropsValidation)

// #  1 реактивные props

// console.log(props.wrapperColor)
// const { wrapperColor } = toRefs(props);
// console.log(wrapperColor.value)

// ####################################

// #  2 не реактивные props

// console.log(props.wrapperColor)
// const { wrapperColor } = props;
// console.log(wrapperColor)
</script>

<style scoped>
.child-wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* работает даже без 1 - 2 */
    /* можно подставить props.wrapperColor и тоже сработает */
    border: 3px solid v-bind('wrapperColor');
    /*border: 3px solid v-bind('props.wrapperColor');*/
    max-width: 400px;
}
</style>
