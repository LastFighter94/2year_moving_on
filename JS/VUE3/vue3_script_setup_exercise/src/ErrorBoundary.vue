<script setup lang="ts">
import {ref, onErrorCaptured} from "vue";

const hasError = ref(false)

const errorMessage = ref('')

onErrorCaptured((err, instance, info) => {
    console.error('ERROR CATCHER WRAPPER')
    console.error('Err ##', err)

    errorMessage.value = err.message

    console.error('Instance ##', instance)
    console.error('Error Info ##', info)
    console.error('#######################')

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
