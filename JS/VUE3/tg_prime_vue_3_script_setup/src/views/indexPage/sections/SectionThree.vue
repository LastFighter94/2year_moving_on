<template>
    <div class="how-to-start-work-div" id="sectionThree">
        <img src="@/assets/indexPage/section-bg-shape.png" alt="" class="work-shape-img">
        <div class="container">
            <div class="want-prime-div">
                <span class="orange-text">Хочу Prime</span>

                <span class="want-prime-div-main-text">Как мне купить Prime и приступить к работе?</span>

                <span class="little-white-text-index-page">Это проще, чем вы думаете. Следуйте простым шагам</span>

                <div class="choose-plan-wrapper">
                    <img src="@/assets/indexPage/working-man.png" alt="" class="choose-plan-img"/>

                    <span class="choose-plan">Выбрать тариф</span>

                    <span class="little-white-text-index-page">У нас есть три тарифа: демо, месячный и вечный</span>

                    <span class="buy-plan">
                            <span class="buy-btn-section-three">
                                <span>
                                    Купить

                                    <b>&#10141;</b>
                                </span>
                        </span>
                    </span>

                    <div class="plan-infos-div-mobile">
                        <div class="count-item-mobile">
                            <span class="abs-count-item-mobile">01</span>
                            <span class="count-item-text-mobile">Выбрать тариф</span>
                        </div>

                        <div class="count-item-mobile">
                            <span class="abs-count-item-mobile">02</span>
                            <span class="count-item-text-mobile">Оплата</span>
                        </div>

                        <div class="count-item-mobile">
                            <span class="abs-count-item-mobile">03</span>
                            <span class="count-item-text-mobile">Доступные методы оплаты</span>
                        </div>

                        <div class="count-item-mobile">
                            <span class="abs-count-item-mobile">04</span>
                            <span class="count-item-text-mobile">Появились вопросы?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="four-sale-options">
            <div class="plan-infos-div">
                <div class="count-item">
                    <span class="abs-count-item">01</span>
                    <span class="count-item-text">Выбрать тариф</span>
                </div>

                <div class="count-item">
                    <span class="abs-count-item">02</span>
                    <span class="count-item-text">Оплата</span>
                </div>

                <div class="count-item">
                    <span class="abs-count-item">03</span>
                    <span class="count-item-text">Доступные методы оплаты</span>
                </div>

                <div class="count-item">
                    <span class="abs-count-item">04</span>
                    <span class="count-item-text">Появились вопросы?</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: 'sectionThree'
})
</script>

<style scoped>
.buy-btn-section-three {
    position: relative;
    display: flex;
    align-items: center;
    width: 150px;

    > span {
        width: 100%;
        border-radius: 30px;
        border: 1px solid #d2d3eb;
        height: 40px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
        color: var(--color-white);
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
    }
}

.buy-btn-section-three:hover {
    cursor: pointer;
}

@media (max-width: 350px){

}
</style>

<style scoped>
.how-to-start-work-div, .sales-options-div, .footer-index-page {
    position: relative;
    display: flex;
    flex-direction: column;
    background-size: cover;
}

.how-to-start-work-div {
    background: url("@/assets/indexPage/section-bg.jpg") no-repeat;
    background-size: cover;
}

.work-shape-img {
    position: absolute;
    top: -2px;
}

@media (max-width: 990px){
    .work-shape-img {
        display: none;
    }
}

.want-prime-div {
    margin-top: 100px;
}

@media (max-width: 990px){
    .want-prime-div {
        margin-top: 50px;
    }
}

.want-prime-div-main-text {
    color: var(--color-white);
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    line-height: 64px;
    font-size: 56px;
    display: block;
    width: 620px;
    margin-top: 40px;
    margin-bottom: 20px;
}

@media (max-width: 990px){
    .want-prime-div-main-text {
        font-size: 40px;
    }
}

@media (max-width: 600px){
    .want-prime-div-main-text {
        width: auto;
        font-size: 30px;
        line-height: 44px;
    }
}

.little-white-text-index-page {
    color: var(--color-white);
    font-size: 18px;
}

@media (max-width: 600px){
    .little-white-text-index-page {
        font-size: 14px;
    }
}

.choose-plan-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.choose-plan-img {
    margin-top: 50px;
}

.choose-plan {
    color: var(--color-white);
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    line-height: 64px;
    font-size: 46px;
    margin-top: 20px;
    margin-bottom: 20px;
}

@media (max-width: 600px){
    .choose-plan {
        font-size: 34px;
        line-height: 44px;
    }
}

.buy-plan {
    margin-top: 20px;
    margin-bottom: 150px;
}

.plan-infos-div {
    background: var(--color-white);
    border-radius: 15px;
    display: flex;
    min-width: 880px;
    min-height: 200px;
    align-items: center;
    justify-content: space-between;
    position: absolute;
}

@media (max-width: 990px){
    .plan-infos-div {
        min-width: auto;
        min-height: 150px;
    }
}

@media (max-width: 600px){
    .plan-infos-div {
        display: none;
    }
}

.four-sale-options {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    position: relative;
}

.count-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 200px;
}

@media (max-width: 990px){
    .count-item {
        min-height: 150px;
    }
}

.abs-count-item {
    position: absolute;
    color: rgba(59, 54, 140, 0.102);
    font-size: 90px;
    width: 100%;
    border-right: 1px solid #d9deef;
}

@media (max-width: 990px){
    .abs-count-item {
        font-size: 60px;
    }
}

.abs-count-item:hover {
    background-color: rgba(60, 57, 138, 0.3);
}

.count-item:last-child .abs-count-item {
    border: 0;
}

.count-item-text {
    color: var(--color-dark);
    font-weight: 600;
    font-size: 23px;
}

@media (max-width: 990px){
    .count-item-text {
        font-size: 15px;
    }
}

.plan-infos-div-mobile {
    display: none;
}

@media (max-width: 600px){
    .buy-plan {
        margin-bottom: 40px;
    }

    .plan-infos-div-mobile {
        display: flex;
        flex-direction: column;
        background: var(--white-color);
        border-radius: 15px;
        margin-bottom: 30px;
    }

    .count-item-mobile {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        min-height: 100px;
    }

    .abs-count-item-mobile {
        position: absolute;
        color: rgba(59, 54, 140, 0.102);
        font-size: 90px;
        width: 100%;
    }

    .count-item-text-mobile {
        color: var(--color-dark);
        font-weight: 600;
        font-size: 17px;
    }
}
</style>
