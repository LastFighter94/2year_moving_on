<script setup>
import {ref} from "vue";

const reviewsDataArr = ref([
    {
        name: 'ANTICHAT',
        text: 'Очень известный и популярный форум в России. Пройдя по ссылке, вы найдете нашу ветку на форуме.',
        iconSrc: '@/assets/indexPage/reviewsSection/sponsors/antichat.png'
    },
    {
        name: 'ZennoLab',
        text: 'Крупнейший форум среди программ. По ссылке ниже вы найдете нашу ветку на форуме.',
        iconSrc: '@/assets/indexPage/reviewsSection/sponsors/zetlab.png'
    },
    {
        name: 'Sunrise Forum',
        text: 'Наш собственный, официальный форум',
        iconSrc: '@/assets/indexPage/reviewsSection/sponsors/sunrise.png'
    }
])
</script>

<template>
    <div class="slider-classic-container-two">
        <div class="sliderClassicWidthTwo" id="sliderClassicWidthTwo">
            <div class="sliderClassicItemTwo" v-for="review in reviewsDataArr">
                <div class="border-wrapper">
                    <div class="border-wrapper-wrapper">
                        <!-- почему-то bind в :src не прокатывает -->
                        <img v-if="review.iconSrc.includes('antichat')" src="@/assets/indexPage/reviewsSection/sponsors/antichat.png" alt="">
                        <img v-if="review.iconSrc.includes('zetlab')" src="@/assets/indexPage/reviewsSection/sponsors/zetlab.png" alt="">
                        <img v-if="review.iconSrc.includes('sunrise')" src="@/assets/indexPage/reviewsSection/sponsors/sunrise.png" alt="">
                    </div>
                </div>

                <div>
                    <img src="@/assets/indexPage/reviewsSection/sponsors/star-icon.png" alt="" class="star-review">
                    <img src="@/assets/indexPage/reviewsSection/sponsors/star-icon.png" alt="" class="star-review">
                    <img src="@/assets/indexPage/reviewsSection/sponsors/star-icon.png" alt="" class="star-review">
                    <img src="@/assets/indexPage/reviewsSection/sponsors/star-icon.png" alt="" class="star-review">
                    <img src="@/assets/indexPage/reviewsSection/sponsors/star-icon.png" alt="" class="star-review">
                </div>

                <h3 class="review-text">
                    {{ review.text }}
                </h3>

                <span class="review-name">
                    {{ review.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.star-review {
    width: 30px;
    height: 30px
}

.review-text {
    color: white;
    line-height: 30px;
    display: block;
    margin-top: 20px;
}

.review-name {
    color: white;
    font-size: 25px;
    margin-top: 20px;
    background: #B364E0;
    display: block;
    border-radius: 30px;
    padding: 5px 30px;
}

.border-wrapper {
    width: 140px;
    height: 140px;
    border: 1px solid #05c3de;
    border-radius: 50%;
    margin: 0 auto 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.border-wrapper-wrapper {
    border: 7px solid #05c3de;
    border-radius: 50%;
    overflow: hidden;
    width: 120px;
    height: 120px;
}

.border-wrapper-wrapper > img {
    width: 150px;
}

@media (max-width: 450px) {
    .star-review {
        width: 10px;
        height: 10px;
    }

    .review-text {
        font-size: 10px;
        line-height: 15px;
        margin-top: 10px;
    }

    .border-wrapper {
        width: 70px;
        height: 70px;
        margin: 0;
    }

    .border-wrapper-wrapper {
        width: 60px;
        height: 60px;
        border: 3px solid #05c3de;
    }

    .border-wrapper-wrapper > img {
        width: 80px;
    }

    .review-name {
        padding: 2px 20px;
        font-size: 16px;
    }
}
</style>

<style scoped>
.slider-classic-container-two {
    overflow-x: hidden;
}

.slider-classic-container-two.active {
    cursor: grab;
}

@media (max-width: 450px){
    .slider-classic-container-two {
        height: 240px;
    }
}

.sliderClassicWidthTwo {
    position: relative;
    width: 550px;

    height: 500px;
    display: flex;
    align-items: start;
    justify-content: start;
    left: 0;
    top: 0;
    transition: 0.4s all ease-in-out;
}

@media (max-width: 1200px){
    .sliderClassicWidthTwo {
        width: 550px;
    }
}

@media (max-width: 660px){
    .sliderClassicWidthTwo {
        width: 420px;
    }
}

@media (max-width: 450px){
    .sliderClassicWidthTwo {
        width: 220px;
    }
}

.sliderClassicItemTwo {
    position: absolute;
    transition: 0.2s ease-in-out;
    width: 550px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
}

@media (max-width: 660px){

    .sliderClassicItemTwo {
        width: 420px;
    }
}

@media (max-width: 450px){
    .sliderClassicItemTwo {
        width: 220px;
    }
}

.sliderClassicItemTwo > img {
    width: 100px;
    height: 60px;
}
</style>
