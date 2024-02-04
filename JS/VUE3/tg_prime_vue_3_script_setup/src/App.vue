<template>
    <ModalWindowsOverlay/>

    <NavBar/>

    <suspense>
        <router-view/>
    </suspense>
</template>

<style lang="scss">
@import '@/assets/styles/main_styles.css';
@import '@/assets/styles/modificators.css';
@import '@/assets/styles/ui_kit.css';

</style>

<script setup>
import NavBar from "@/layout/navbar/NavBar.vue";
import ModalWindowsOverlay from "@/layout/modalWindowsLogic/modalWindowsOverlay.vue";
</script>
