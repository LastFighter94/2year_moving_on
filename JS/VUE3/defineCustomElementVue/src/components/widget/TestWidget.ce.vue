<script setup>
import TestWidgetHeader from "@/components/widget/TestWidgetHeader.vue";
import TestWidgetFooter from "@/components/widget/TestWidgetFooter.vue";
import {ref} from "vue";

const count = ref(0)
</script>

<template>
<TestWidgetHeader/>

    <p>{{count}}</p>

    <button @click="count++">test btn</button>

<TestWidgetFooter/>
</template>

<style>
// all styles - even styles of child components - goes here!
p {
    color: red;
}
</style>
