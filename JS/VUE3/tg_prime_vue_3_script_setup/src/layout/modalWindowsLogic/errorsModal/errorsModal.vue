<template>
    <div class="errors-modal">
        <b>Module:</b> {{ errorStatus.module }} <br>
        <b>ApiRoute:</b> {{ errorStatus.apiRoute }} <br>
        <b>Text:</b> {{ errorStatus.text }}
    </div>
</template>

<script setup>
import {computed} from "vue";
import {useModalWindowsStore} from "@/layout/modalWindowsLogic/modalWindowsStore";

const modalWindowsStore = useModalWindowsStore()


const errorStatus = computed(() => modalWindowsStore.errorStatus)
</script>

<style scoped>
.errors-modal {
    background: var(--white-color);
    padding: 30px;
    border: 3px solid red;
    color: red;
}
</style>
