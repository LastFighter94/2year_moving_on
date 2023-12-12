<template>
    <div>
        <p class="testClass">test</p>

        <br>

        <ComponentOne/>
    </div>
</template>

<script>
import ComponentOne from "./ComponentOne.vue";

export default {
    components: {
        ComponentOne
    },
    name: 'AppVue'
}
</script>

<style scoped>
.testClass {
    background-color: indianred;
}
</style>
