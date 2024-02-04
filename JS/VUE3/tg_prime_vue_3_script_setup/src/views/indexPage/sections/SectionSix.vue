<template>
    <div class="container reviews-wrapper" id="sectionSix">
        <span class="orange-text">Отзывы на форумах</span>

        <div class="reviews-div">
            <ClassicSlider
                    :classes="{
                            sliderClassicWidth: 'sliderClassicWidthTwo',
                            sliderClassicItem: '.sliderClassicItemTwo',
                            itemWidth: {
                                mobile: 220,
                                tablet: 420,
                                desktop: 550
                            },
                            mediaQuery: {
                                mobile: 450,
                                tablet: 660,
                            },
                            disableButtons: false,
                            prevBtnId: 'prevBtnTwo',
                            nextBtnId: 'nextBtnTwo',
                            sliderClassicContainer: '.slider-classic-container-two',
                            disableDrag: true,
                            buttonsPosition: 'sideBySide'
                    }">
                <template #prevBtn>
                    <ReviewSlideSwipeLeftBtn/>
                </template>

                <template #content>
                    <ReviewSlides/>
                </template>

                <template #nextBtn>
                    <ReviewSlideSwipeRightBtn/>
                </template>
            </ClassicSlider>
        </div>
    </div>
</template>

<script setup>

import ReviewSlideSwipeRightBtn from "@/components/sliders/slides/reviewSlides/ReviewSlideSwipeRightBtn.vue";
import ClassicSlider from "@/components/sliders/ClassicSlider.vue";
import ReviewSlideSwipeLeftBtn from "@/components/sliders/slides/reviewSlides/ReviewSlideSwipeLeftBtn.vue";
import ReviewSlides from "@/components/sliders/slides/reviewSlides/ReviewSlides.vue";
</script>

<style lang="scss" scoped>
.reviews-wrapper {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 120px;
}

.reviews-div {
  background: -webkit-linear-gradient( 16deg, rgb(225, 161, 237) 0%, rgb(172, 125, 241) 35%, rgb(118, 88, 244) 100% );
  width: 600px;
  height: 600px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

@media (max-width: 660px){
  .reviews-div {
    width: 500px;
    height: 500px;
  }
}

@media (max-width: 450px){
  .reviews-div {
    width: 250px;
    height: 250px;
  }
}

.reviews-div::before, .reviews-div::after {
  display: flex;
  height: 60px;
  width: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.3;
}

.reviews-div::before {
  content: '';
  position: absolute;
  top: 150px;
  left: 80px;
  background-image: url("@/assets/indexPage/reviewsSection/before.png");
}

.reviews-div::after {
  content: '';
  position: absolute;
  bottom: 150px;
  left: 480px;
  background-image: url("@/assets/indexPage/reviewsSection/after.png");
}

@media (max-width: 660px){
  .reviews-div::before {
    left: 40px;
  }

  .reviews-div::after {
    bottom: 130px;
    left: 410px;
  }
}

@media (max-width: 450px){
  .reviews-div::before {
    display: none;
  }

  .reviews-div::after {
    display: none;
  }

  .reviews-div {
    border-radius: 10%;
  }
}
</style>
