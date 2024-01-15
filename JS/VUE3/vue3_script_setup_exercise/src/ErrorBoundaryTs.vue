<script setup lang="ts">
import {ref, onErrorCaptured} from "vue";
import {logTsError} from "./globHelpers/logTs.ts";

const hasError = ref<boolean>(false)

const errorMessage = ref<string>('')

onErrorCaptured((err, instance, info) => {
    console.error(err, 'console-err - before config console-err')

    logTsError('ERROR CATCHER WRAPPER TS')
    logTsError('Err ##', err)

    errorMessage.value = err.message

    logTsError('Instance ##', instance)
    logTsError('Error Info ##', info)
    logTsError('#######################')

    hasError.value = true
})
</script>

<template>
  <div>

    <p class="errorText" v-if="hasError">Something went wrong - {{ errorMessage }}!</p>

    <slot v-else></slot>
  </div>
</template>

<style scoped>
.errorText {
    color: red;
    display: block;
    font-weight: 600;
    border: 1px;
    border-style: dashed solid;;
    border-color: red;
}
</style>
