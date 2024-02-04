<template>
    <div class="footer-index-page">
        <img src="@/assets/indexPage/footer/footer-shape.png" alt="" class="footer-top-shape">
        <div class="container">
            <div class="footer-index-page-content">
                <div class="footer-icons">
                    <img src="@/assets/indexPage/footer/vk_icon.png" alt="">
                    <img src="@/assets/indexPage/footer/telegram_icon.png" alt="">
                </div>

                <ul class="footer-index-page-info">
                    <li>О нас</li>
                    <li>Чаво</li>
                    <li>Контакты</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer-top-shape {
    margin-top: -2px;
    width: 102%;
}

@media (max-width: 900px){
    .footer-top-shape {
        display: none;
    }
}

.footer-index-page {
    background: url("@/assets/indexPage/footer/footer-bg.jpg") no-repeat;
    background-size: cover;
}

.footer-index-page-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.footer-icons {
    margin-bottom: 80px;
}

@media (max-width: 900px){
    .footer-index-page-content {
        padding-top: 30px;
    }
}

.footer-index-page-info {
    display: flex;
    gap: 40px;
    color: #fff;
    margin-bottom: 20px;
}
</style>
