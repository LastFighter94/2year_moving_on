<script setup>
import {ref} from "vue"

const {partNumber, partDescription} = defineProps(['partNumber', 'partDescription'])

const colorFromScript = ref('')

const partsArr = [1, 2, 3, 4, 5]

if (partsArr.includes(partNumber)){
    if (partNumber === 1) colorFromScript.value = '#64ff9a'
    if (partNumber === 2) colorFromScript.value = '#ffb764'
    if (partNumber === 3) colorFromScript.value = '#2eadad'
    if (partNumber === 4) colorFromScript.value = '#b464ff'
    if (partNumber === 5) colorFromScript.value = '#22b624'
} else {
    colorFromScript.value = '#c2d5ec'
}

</script>

<template>
    <div class="parent-wrapper">
        <h3>
            Part {{partNumber}}
        </h3>

        <p class="parent-wrapper-p">
            {{partDescription}}
        </p>

        <slot></slot>
    </div>
</template>

<style scoped>
.parent-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 5px dotted v-bind('colorFromScript');
}

.parent-wrapper-p {
    padding: 3px;
}
</style>
