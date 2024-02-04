<template>
    <div class="our-opportunities">
        <div class="container">
            <div class="our-opportunities-content">
                <div class="our-opportunities-content-img">
                    <img src="@/assets/indexPage/tool.png" alt="">
                </div>

                <div class="our-opportunities-content-draggable-part">
                    <div class="opportunities-functions">
                        <span class="orange-text">Откройте для себя мощный инструмент</span>

                        <span class="big-index-text-functions">Наши возможности</span>

                        <DraggableSlider
                            :itemWidth="{
                                mobile: 220,
                                tablet: 440,
                                desktop: 220
                            }"
                            :mediaQuery="{
                                mobile: 350,
                                tablet: 600,
                            }"
                            :dragDiv="'.slider-items'"
                            :disableDrag="false"
                            :disableWhenDesktop="false"
                        >
                            <div class="slider-items">
                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/1.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                ИИ, который <br/>подготавливает <br/>лидов
                                            </span>
                                    </div>
                                </div>

                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/2.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                Автоответчик
                                            </span>
                                    </div>
                                </div>

                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/3.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                Рассылка <br/>сообщений
                                            </span>
                                    </div>
                                </div>

                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/4.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                Работа по ID
                                            </span>
                                    </div>
                                </div>

                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/5.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                Работа с <br/>комментариями
                                            </span>
                                    </div>
                                </div>

                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/6.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                Создание ботов
                                            </span>
                                    </div>
                                </div>

                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/7.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                Отправка жалоб
                                            </span>
                                    </div>
                                </div>

                                <div class="slider-item">
                                    <img src="@/assets/indexPage/recharge/8.png"/>
                                    <div style="text-align: center;">
                                            <span class="recharge-text">
                                                Многопоточность
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </DraggableSlider>


                        <span class="want-to-buy">
                            <span class="buy-btn-section-four">
                                    <span>
                                        Хочу купить!

                                        <b>&#10141;</b>
                                    </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import DraggableSlider from "@/components/sliders/DraggableSlider.vue";
</script>

<style scoped>
.buy-btn-section-four {
    position: relative;
    display: flex;
    align-items: center;
    width: 200px;

    > span {
        width: 100%;
        border-radius: 30px;
        border: 1px solid #d2d3eb;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        color: var(--color-dark);
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
    }
}

.buy-btn-section-four:hover {
    cursor: pointer;
}

@media (max-width: 350px){

}
</style>

<style scoped>
@media (max-width: 600px){
    .orange-text {
        text-align: center;
    }
}

.big-index-text-functions {
    font-size: 50px;
    line-height: 60px;
    color: var(--color-dark);
    font-weight: 600;
    font-family: 'Josefin Sans', sans-serif;
}

@media (max-width: 600px){
    .big-index-text-functions {
        text-align: center;
        display: block;
        word-break: break-all;
        font-size: 40px;
        line-height: 50px;
    }
}

.our-opportunities {
    margin-top: 150px;
}

@media (max-width: 600px){
    .our-opportunities {
        margin-top: 50px;
    }
}

.our-opportunities-content {
    display: flex;
    justify-content: space-between;
}

.our-opportunities-content-img {
    width: 50%;

    > img {
        position: absolute;
        left: -250px;
    }
}

@media (max-width: 1120px){
    .our-opportunities-content-img {
        > img {
            left: -340px;
        }
    }
}

.our-opportunities-content-draggable-part {
    width: 50%;
}

.opportunities-functions {
    display: flex;
    flex-direction: column;
}

@media (max-width: 900px){
    .our-opportunities-content-img {
        display: none;
    }

    .our-opportunities-content-draggable-part {
        width: 100%;
    }

    .opportunities-functions {
        align-items: center;
    }
}

.recharge-text {
    color: var(--dark-color);
    font-size: 17px;
}

.want-to-buy {
    font-size: 18px;
    color: var(--dark-color);
}
</style>

<!--draggableSlider styles-->
<!--draggableSlider styles-->
<!--draggableSlider styles-->

<style>
ul {
    padding: 0;
}

li {
    list-style: none;
}

.slider-items {
    position: relative;
    width: 440px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0;
    cursor: pointer;
    display: flex;
    /*justify-content: center;*/
}

@media (max-width: 350px){
    .slider-items {
        width: 220px;
    }
}

.slider-items.active {
    cursor: grab;
}

.slider-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    user-select: none;
    border: 1px solid #d6defb;
    background: transparent;
    min-width: 200px;
    max-width: 200px;
    height: 230px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 20px;
}

@media (max-width: 480px){
    .slider-item {
        min-width: 420px;
        max-width: 420px;
    }
}

@media (max-width: 350px){
    .slider-item {
        min-width: 200px;
        max-width: 200px;
    }
}

.slider-item:first-child {
    /*margin-left: 0;*/
}
</style>
