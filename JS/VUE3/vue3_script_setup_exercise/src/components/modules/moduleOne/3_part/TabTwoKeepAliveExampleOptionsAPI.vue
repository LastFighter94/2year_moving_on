<script setup lang="ts">
import {onActivated, onDeactivated, ref} from "vue";

onActivated(() => {
    console.log('tab two activated! ###')
})

onDeactivated(() => {
    console.log('tab two deactivated! ###')
})

const tabTwoText = ref('')
</script>

<template>
    <h5>Tab two keep alive example</h5>

    <input type="text" v-model="tabTwoText"/>

    <p>{{tabTwoText}} - reactive text - v - model</p>
</template>

<style scoped>
</style>
