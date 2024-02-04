<script setup>
import PriceSlideSwipeRightBtn from "@/components/sliders/slides/priceSlides/PriceSlideSwipeRightBtn.vue";
import PriceSlideSwipeLeftBtn from "@/components/sliders/slides/priceSlides/PriceSlideSwipeLeftBtn.vue";
import ClassicSlider from "@/components/sliders/ClassicSlider.vue";
import PriceSlides from "@/components/sliders/slides/priceSlides/PriceSlides.vue";

import {useRoute} from "vue-router";
import {ref} from "vue";

const router = useRoute()

const buttonsPosition = ref('sideBySide')

if (router.name === 'personalCabinet') buttonsPosition.value = 'bottom'
</script>

<template>
    <ClassicSlider
            :classes="{
                            sliderClassicWidth: 'sliderClassicWidth',
                            sliderClassicItem: '.sliderClassicItem',
                            itemWidth: {
                                mobile: 280,
                                tablet: 280,
                                desktop: 280
                            },
                            mediaQuery: {
                                mobile: 300,
                                tablet: 660
                            },
                            disableButtons: true,
                            prevBtnId: 'prevBtn',
                            nextBtnId: 'nextBtn',
                            sliderClassicContainer: '.slider-classic-container',
                            disableDrag: false,
                            disableWhenDesktop: true,
                            buttonsPosition: buttonsPosition
                    }">
        <template #prevBtn>
            <price-slide-swipe-left-btn/>
        </template>

        <template #content>
            <price-slides/>
        </template>

        <template #nextBtn>
            <price-slide-swipe-right-btn/>
        </template>
    </ClassicSlider>
</template>
