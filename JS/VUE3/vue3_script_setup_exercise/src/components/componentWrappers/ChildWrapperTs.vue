<template>
    <div class="child-wrapper">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue"
import {logTs} from "../../globHelpers/logTs.ts";

// outside - just use - export interface
interface Props {
    wrapperColor?: string
    propToTestPropsValidation?: 'success' | 'warning' | 'danger' | 'default'
}

// если подчеркивает красным - то это bug IDE
const props = withDefaults(defineProps<Props>(), {
    wrapperColor: 'red',
    propToTestPropsValidation: 'default'
})

logTs(props.propToTestPropsValidation)

// #  1 реактивные props

// logTs(props.wrapperColor)
// const { wrapperColor } = toRefs(props);
// logTs(wrapperColor.value)

// ####################################

// #  2 не реактивные props

// logTs(props.wrapperColor)
// const { wrapperColor } = props;
// logTs(wrapperColor)
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
