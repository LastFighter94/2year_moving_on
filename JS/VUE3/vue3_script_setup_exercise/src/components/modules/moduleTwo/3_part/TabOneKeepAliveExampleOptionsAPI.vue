<script setup lang="ts">
import {onActivated, onDeactivated, ref} from "vue";
import {logTs} from "../../../../globHelpers/logTs.ts";

onActivated((): void => {
    logTs('tab one activated! ###')
})

onDeactivated((): void => {
    logTs('tab one deactivated! ###')
})

const tabOneText = ref<string>('')
</script>

<template>
  <h5>Tab one keep alive example</h5>

  <input type="text" v-model="tabOneText"/>

  <p>{{tabOneText}} - reactive text - v - model</p>
</template>

<style scoped>
</style>
