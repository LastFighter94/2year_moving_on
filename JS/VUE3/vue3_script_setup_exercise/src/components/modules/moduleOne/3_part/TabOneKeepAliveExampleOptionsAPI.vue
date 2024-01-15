<script setup lang="ts">
import {onActivated, onDeactivated, ref} from "vue";

onActivated(() => {
    console.log('tab one activated! ###')
})

onDeactivated(() => {
    console.log('tab one deactivated! ###')
})

const tabOneText = ref('')
</script>

<template>
  <h5>Tab one keep alive example</h5>

  <input type="text" v-model="tabOneText"/>

  <p>{{tabOneText}} - reactive text - v - model</p>
</template>

<style scoped>
</style>
