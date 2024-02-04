<template>
    <div class="sales-options-div" id="sectionFive">
        <img src="@/assets/indexPage/salesOptionSection/top-shape.png" alt="" class="top-shape-img-sales-option">
        <div class="container">
            <div class="pricing-div-content">
                <span class="pricing-title">Тарифы</span>

                <p>У Prime есть условия, от бесплатных до платных, которые масштабируются в зависимости от ваших потребностей. Подпишитесь на план, который соответствует размер вашего бизнеса.</p>

                <prices-slider/>
            </div>
        </div>

        <div class="sales-options-div-bottom-shape">
            <div>
                <img src="@/assets/indexPage/salesOptionSection/bottom-shape.png" alt="" class="bottom-shape-img-sales-option">
            </div>
        </div>
    </div>
</template>

<script setup>
import PricesSlider from "@/components/sliders/slides/priceSlides/PricesSlider.vue";
</script>

<style lang="scss" scoped>
.sales-options-div {
    margin-top: 200px;
    background: url("@/assets/indexPage/salesOptionSection/pricing-bg.jpg") no-repeat;
    background-size: cover;
}

@media (max-width: 900px){
    .sales-options-div {
        margin-top: 50px;
        padding-bottom: 30px;
    }
}

.pricing-div-content {
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-top: 200px;
    flex-direction: column;
}

@media (max-width: 900px){
    .pricing-div-content {
        margin-top: 0;
    }
}

.pricing-title {
    font-size: 45px;
    font-weight: 600;
    color: var(--white-color)
}

.pricing-div-content > p {
    display: block;
    width: 500px;
    margin-top: 30px;
    color: var(--white-color);
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 70px;
}

@media (max-width: 900px){
    .pricing-div-content > p {
        width: auto;
        font-size: 15px;
        line-height: 20px;
        margin-bottom: 30px;
    }
}

.top-shape-img-sales-option {
    width: 120%;
    margin-top: -3px;
}

@media (max-width: 900px){
    .top-shape-img-sales-option {
        display: none;
    }
}

.bottom-shape-img-sales-option {
    position: absolute;
    top: 0;
    height: 102%;
    width: 102%;
}

.sales-options-div-bottom-shape {
    margin-top: -100px;
    z-index: 1;

    > div {
        position: relative;
        height: 200px;
    }
}

@media (max-width: 900px){
    .sales-options-div-bottom-shape {
        display: none;
    }
}
</style>
