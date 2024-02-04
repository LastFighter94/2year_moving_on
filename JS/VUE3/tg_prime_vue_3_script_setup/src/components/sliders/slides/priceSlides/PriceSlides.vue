<script setup>
import {ref} from "vue";

const slidesData = ref([
    {
        priceName: 'Демо',
        iconSrc: '@/assets/indexPage/salesOptionSection/price-icon1.png',
        advantages: [
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
        ],
        price: 0,
        buyLink: ''
    },
    {
        priceName: 'Лицензии на месяц',
        iconSrc: '@/assets/indexPage/salesOptionSection/price-icon2.png',
        advantages: [
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
        ],
        price: 100,
        buyLink: ''
    },
    {
        priceName: 'Демо версия',
        iconSrc: '@/assets/indexPage/salesOptionSection/price-icon2.png',
        advantages: [
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
        ],
        price: 10,
        buyLink: ''
    },
    {
        priceName: 'Демо',
        iconSrc: '@/assets/indexPage/salesOptionSection/price-icon1.png',
        advantages: [
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
        ],
        price: 0,
        buyLink: ''
    },
    {
        priceName: 'Лицензии на месяц',
        iconSrc: '@/assets/indexPage/salesOptionSection/price-icon1.png',
        advantages: [
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
        ],
        price: 10000,
        buyLink: ''
    },
    {
        priceName: 'Демо',
        iconSrc: '@/assets/indexPage/salesOptionSection/price-icon2.png',
        advantages: [
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
        ],
        price: 0,
        buyLink: ''
    },
    {
        priceName: 'Демо',
        iconSrc: '@/assets/indexPage/salesOptionSection/price-icon1.png',
        advantages: [
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
            'Какой-то супер текст',
        ],
        price: 0,
        buyLink: ''
    }
])
</script>

<template>
    <div class="slider-classic-container">
        <div class="sliderClassicWidth" id="sliderClassicWidth">
            <div class="sliderClassicItem" v-for="data in slidesData">
                <span class="sliderClassicItem-title-text">{{ data.priceName }}</span>

                <!-- почему-то bind в :src не прокатывает -->
                <img v-if="data.iconSrc.includes('icon1')" style="width: 100px;" src="@/assets/indexPage/salesOptionSection/price-icon1.png" alt=""/>
                <img v-if="data.iconSrc.includes('icon2')" style="width: 100px;" src="@/assets/indexPage/salesOptionSection/price-icon2.png" alt=""/>

                <span class="sliderClassicItem-title-text">{{ data.price }}$</span>

                <ul class="price-ul">
                    <li v-for="text in data.advantages">{{ text }}</li>
                </ul>

                <p>Купить</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slider-classic-container {
    overflow-x: hidden;
    /*padding: 30px 30px 30px 30px;*/
    /*margin-bottom: 200px;*/
}

.slider-classic-container.active {
    cursor: grab;
}

.sliderClassicWidth {
    /* first method */
    /* position: absolute; */

    /* second method */
    position: relative;
    /*width: 1104px;*/
    width: 1120px;

    height: 500px;
    display: flex;
    align-items: start;
    justify-content: start;
    left: 0;
    top: 0;
    transition: 0.4s all ease-in-out;
}

@media (max-width: 1200px){
    .sliderClassicWidth {
        /*width: 824px;*/

        width: 840px;
    }
}

@media (max-width: 920px){
    .sliderClassicWidth {
        /*width: 544px;*/

        width: 560px;
    }
}

@media (max-width: 660px){
    .sliderClassicWidth {
        width: 280px;
    }
}


.sliderClassicItem {
    /* second method */
    position: absolute;
    transition: 0.2s ease-in-out;

    background: var(--white-color);
    width: 280px;
    height: 100%;
    /*margin: 0 10px;*/
    text-align: center;
    display: flex;
    align-items: center;
    color: var(--dark-color);
    flex-direction: column;
    gap: 20px;
    z-index: 2;
}

.sliderClassicItem > img {
    width: 100px;
    height: 60px;
}

.sliderClassicItem:hover {
    scale: 0.95;
    /*border: 4px solid white;*/
    /*z-index: 100;*/
    /*border-radius: 10px;*/
    box-shadow: 0 0 15px rgb(86, 73, 83);

    /*opacity: 0.7;*/
}

@media (max-width: 660px){
    .sliderClassicItem:hover {
        cursor: grab;
    }
}

/* не обязательные стили */
/* не обязательные стили */
/* не обязательные стили */

.sliderClassicItem-title-text{
    font-size: 20px;
    font-weight: 800;
    display: block;
}

.price-ul {
    display: flex;
    flex-direction: column;
    /*width: 100%;*/
    align-items: baseline;
    /*padding-left: 30px;*/
    flex-grow: 1;
    justify-content: center;
}

.price-ul > li {
    list-style-image: url("@/assets/indexPage/salesOptionSection/checkMark-little.png");
    /*list-style-image: linear-gradient(to left bottom, red, blue);*/
}

/*.price-ul {*/
/*    position: relative;*/
/*}*/

/*.price-ul > li::before {*/
/*    background-image: url("@/assets/indexPage/salesOptionSection/checkMark.png");*/
/*    background-size: 20px;*/
/*    display: inline-block;*/
/*    position: absolute;*/
/*    height: 20px;*/
/*    content: '';*/
/*    width: 20px;*/
/*    left: -25px;*/
/*}*/
</style>
