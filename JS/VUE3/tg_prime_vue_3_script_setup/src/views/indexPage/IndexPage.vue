<template>
    <div class="indexPage-content">
        <SectionOne/>

        <SectionTwo/>

        <SectionThree/>

        <SectionFour/>

        <SectionFive/>

        <SectionSix/>

        <SectionSeven/>

        <div class="scrollTopBtn" @click="scrollToTop" v-if="showScrollTopBtn">
            <span>&#10153;</span>
        </div>
    </div>
</template>

<script setup>

import SectionOne from "@/views/indexPage/sections/SectionOne.vue";
import SectionTwo from "@/views/indexPage/sections/SectionTwo.vue";
import SectionThree from "@/views/indexPage/sections/SectionThree.vue";
import SectionFour from "@/views/indexPage/sections/SectionFour.vue";
import SectionFive from "@/views/indexPage/sections/SectionFive.vue";
import SectionSix from "@/views/indexPage/sections/SectionSix.vue";
import SectionSeven from "@/views/indexPage/sections/SectionSeven.vue";
import {ref} from "vue";

defineOptions({
    name: 'indexPage'
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const showScrollTopBtn = ref(false)

addEventListener("scroll", (event) => {
    showScrollTopBtn.value = window.pageYOffset > 500
});
</script>

<style>
.orange-text {
    color: var(--color-orange);
    font-weight: 1000;
    margin-bottom: 30px;
    font-size: 24px;
}
</style>

<style scoped>
.indexPage-content {
    overflow: hidden;
}

.scrollTopBtn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    transition: 0.2s ease-in-out;
    z-index: 3000000000;

    > span {
        font-size: 30px;
        border: 2px solid var(--dark-color);
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border-radius: 15px;
        color: var(--dark-color);
        background-color: var(--white-color);
    }

    > span:hover {
        cursor: pointer;
    }
}
</style>
