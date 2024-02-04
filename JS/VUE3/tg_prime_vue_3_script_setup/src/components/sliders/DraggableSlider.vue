<script setup>
import {dragLogic} from "@/components/sliders/slides/draggableLogic";
import {getSliderInfo} from "@/components/sliders/slides/getSliderInfo";

const props = defineProps(['itemWidth', 'mediaQuery', 'dragDiv', 'disableDrag', 'disableWhenDesktop'])

const {
    itemWidth, mediaQuery, dragDiv, disableDrag, disableWhenDesktop
} = props

// isTable && isMobile пока не пригождаются
let {isDesktop, isTablet, isMobile, currentItemWidth} = getSliderInfo(itemWidth, mediaQuery)

setTimeout(() => dragLogic(dragDiv, isDesktop, disableDrag, currentItemWidth, disableWhenDesktop))
</script>

<template>
    <div class="slider-draggable-wrapper">
        <slot></slot>
    </div>
</template>

<style scoped>
.slider-draggable-wrapper {
    position: relative;
}
</style>
