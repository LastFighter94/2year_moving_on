<script setup>
import {dragLogic} from "@/components/sliders/slides/draggableLogic";
import {getSliderInfo} from "@/components/sliders/slides/getSliderInfo";

const props = defineProps(['classes'])

const {
    sliderClassicContainer,
    sliderClassicWidth,
    sliderClassicItem,
    itemWidth,
    prevBtnId,
    nextBtnId,
    mediaQuery,
    disableDrag,
    disableWhenDesktop,
    buttonsPosition
} = props.classes

// isTable && isMobile пока не пригождаются
let {isDesktop, isTablet, isMobile, currentItemWidth} = getSliderInfo(itemWidth, mediaQuery)

setTimeout(() => {
    let count = 0

    const sliderWidth = document.getElementById(sliderClassicWidth)
    const prevBtnElement = document.getElementById(prevBtnId)
    const nextBtnElement = document.getElementById(nextBtnId)

    let itemsMaxLeft

    const secondMethodFunc = () => {
        let items = document.querySelectorAll(sliderClassicItem)

        items.forEach((i, index) => {
            i.style.left = index * currentItemWidth + 'px'
            if (index === items.length - 1) itemsMaxLeft = index * currentItemWidth
        })
    }

    secondMethodFunc()

    const thirdMethod = (action) => {
        let items = document.querySelectorAll(sliderClassicItem)

        items.forEach(i => {
            let leftStyle = i.style.left.split('px')[0]

            if (action === 'next'){
                if (+leftStyle === 0) i.style.left = itemsMaxLeft + 'px'
                else i.style.left = +leftStyle - currentItemWidth + 'px'
            }

            if (action === 'prev'){
                if (+leftStyle === itemsMaxLeft) i.style.left = 0 + 'px'
                else i.style.left = +leftStyle + currentItemWidth + 'px'
            }
        })
    }

    prevBtnElement.addEventListener('click', () => {
        // if (count === 0) return
        // count++
        // doSlide()

        // prev() // можно без анимации - убираем функцию ниже и делаем first method в стилях
        // secondMethodFunc()

        thirdMethod('prev')
    })

    nextBtnElement.addEventListener('click', () => {
        // if (count === -2) return
        // count--
        // doSlide()

        // next() // можно без анимации - убираем функцию ниже и делаем first method в стилях
        // secondMethodFunc()

        thirdMethod('next')
    })

    const doSlide = () => sliderWidth.style.left = count * currentItemWidth + 'px'
    const next = () => sliderWidth.append(document.querySelectorAll(sliderClassicItem)[0])
    const prev = () => sliderWidth.prepend(document.querySelectorAll(sliderClassicItem)[14])

    // ЛОГИКА DRAGGABLE параллельно
    dragLogic(sliderClassicContainer, isDesktop, disableDrag, currentItemWidth, disableWhenDesktop)
})
</script>

<template>
    <template v-if="buttonsPosition === 'sideBySide'">
        <div class="flexSlider">
            <slot name="prevBtn"></slot>

            <slot name="content"></slot>

            <slot name="nextBtn"></slot>
        </div>
    </template>

    <template v-if="buttonsPosition === 'bottom'">
        <div class="flexSlider">
            <slot name="content"></slot>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px;">
            <slot name="prevBtn"></slot>

            <slot name="nextBtn"></slot>
        </div>
    </template>
</template>

<style>
.flexSlider {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
