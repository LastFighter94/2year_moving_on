<template>
    <div class="section-one">
        <div class="container">
            <div class="section-one-content">
                <div class="section-one-content-left-side">
                        <span class="indexPage-title">
                            Telegram Prime - лучшая программа для продвижения в Telegram
                        </span>

                    <p class="section-one__p">Зарабатывайте, предлагая услуги по продвижению в Telegram</p>

                    <p class="section-one__p">Продвигайте свои проекты и собирайте лиды!</p>

                    <p class="section-one__p">Оставьте свой e-mail для получения бесплатной демо-версии:</p>

                    <p class="section-one__p">
                        <span class="email-send-input">
                            <span>
                                <input type="email" placeholder="Ваш email">
                            </span>

                            <b>&#10141;</b>
                        </span>
                    </p>

                    <div class="section-one-content-counter">
                        <div class="counter-div">
                            <img src="@/assets/indexPage/counter1.png" alt=""/> <span class="gradient-text-one">17501</span> пользователей
                        </div>

                        <div class="counter-div">
                            <img src="@/assets/indexPage/counter2.png" alt=""/><span class="gradient-text-two">1987</span> использований в день
                        </div>
                    </div>
                </div>

                <span class="section-one-content-right-side">
                    <img class="slide-from-right-img" src="@/assets/indexPage/right-animation.png" alt=""/>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: 'sectionOne'
})
</script>

<style scoped>
.email-send-input {
    position: relative;
    display: flex;
    align-items: center;
    width: 350px;

    > span {
        width: 100%;
        border-radius: 30px;
        border: 1px solid #d2d3eb;
        padding-left: 35px;
        height: 60px;

        > input {
            background: inherit;
            border: none;
            height: 60px;
            width: 250px;
            font-size: 20px;
        }

        > input:focus {
            outline: none;
        }
    }

    > b {
        position: absolute;
        right: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-image: linear-gradient(#B364E0, #2355F9);
        color: var(--white-color);
        font-size: 30px;
    }
}

@media (max-width: 350px){
    .email-send-input {
        width: 200px;

        > span {
            padding-left: 15px;
            height: 40px;

            > input {
                background: inherit;
                border: none;
                height: 40px;
                width: 130px;
                font-size: 13px;
            }

            > input:focus {
                outline: none;
            }
        }

        > b {
            height: 40px;
            width: 40px;
            font-size: 20px;
        }
    }
}
</style>

<style scoped>
.section-one {
    background: url("@/assets/indexPage/top-bg-banner.jpg") no-repeat;
    background-size: cover;
}

@media (max-width: 990px){
    .section-one {
        background: var(--white-color);
        margin-bottom: 50px;
    }
}

.section-one__p {
    color: var(--color-dark);
    font-size: 24px;
    display: block;
    margin-bottom: 40px;
}

@media (max-width: 700px){
    .section-one__p {
        font-size: 18px;
        margin-bottom: 20px;
    }
}

@media (max-width: 350px){
    .section-one__p {
        font-size: 14px;
        margin-bottom: 15px;
    }
}

.section-one-content {
    display: flex;
    justify-content: space-between;
}

@media (max-width: 990px){
    .section-one-content {
        width: 100%;
        justify-content: center;
    }
}

.section-one-content-left-side {
    display: flex;
    width: 50%;
    flex-direction: column;
}

@media (max-width: 990px){
    .section-one-content-left-side {
        width: 70%;
    }
}

@media (max-width: 700px){
    .section-one-content-left-side {
        width: 100%;
    }
}

.section-one-content-counter {
    display: flex;
    flex-direction: column;
    color: var(--dark-color);
    align-items: baseline;
}

.section-one-content-right-side {
    width: 50%;
    position: relative;
    margin-top: 200px;
}

@media (max-width: 990px){
    .section-one-content-right-side {
        display: none;
    }
}

.gradient-text-one, .gradient-text-two {
    font-size: 44px;
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-shadow: 0.968px 3.881px 1.92px rgba(232, 58, 153, 0.31);
}

@media (max-width: 350px){
    .gradient-text-one, .gradient-text-two {
        font-size: 24px;
    }
}

.gradient-text-one {
    background-color: #f3ec78;
    background-image: linear-gradient(45deg, #e28d6f, #e28d6f);
}

.gradient-text-two {
    background-color: #f378a7;
    background-image: linear-gradient(45deg, #e8648e, #d76fe2);
}

.counter-div {
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.counter-div > img {
    width: 65px;
}

@media (max-width: 350px){
    .counter-div {
        flex-direction: column;
        width: 100%;
    }

    .counter-div > img {
        width: 45px;
    }
}

.indexPage-title {
    font-size: 60px;
    line-height: 70px;
    color: var(--color-dark);
    font-weight: 600;
    font-family: 'Josefin Sans', sans-serif;
    margin-top: 200px;
    margin-bottom: 60px;
}

@media (max-width: 990px){
    .indexPage-title {
        margin-top: 100px;
        margin-bottom: 20px;
    }
}

@media (max-width: 700px){
    .indexPage-title {
        font-size: 40px;
        line-height: 50px;
        margin-top: 50px;
    }
}

@media (max-width: 350px){
    .indexPage-title {
        font-size: 25px;
        line-height: 35px;
    }
}

@keyframes slide-from-right-animation {
    0% {
        transform: translateX(2400px);
        opacity: 0;
    }

    25% {
        transform: translateX(1800px);
        opacity: 0.25;
    }

    50% {
        transform: translateX(1200px);
        opacity: 0.5;
    }

    100% {
        transform: translateX(0); /* The image width */
        opacity: 1;
    }
}

.slide-from-right-img {
    animation: slide-from-right-animation 1s linear infinite;
    animation-iteration-count: 1;
    position: absolute;
}
</style>
