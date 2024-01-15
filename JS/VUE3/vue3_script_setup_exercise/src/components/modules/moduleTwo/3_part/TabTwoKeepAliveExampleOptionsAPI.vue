<script setup lang="ts">
import {onActivated, onDeactivated, ref} from "vue";
import {logTs} from "../../../../globHelpers/logTs.ts";

onActivated((): void => {
    logTs('tab two activated! ###')
})

onDeactivated((): void => {
    logTs('tab two deactivated! ###')
})

const tabTwoText = ref<string>('')
</script>

<template>
    <h5>Tab two keep alive example</h5>

    <input type="text" v-model="tabTwoText"/>

    <p>{{tabTwoText}} - reactive text - v - model</p>
</template>

<style scoped>
</style>
