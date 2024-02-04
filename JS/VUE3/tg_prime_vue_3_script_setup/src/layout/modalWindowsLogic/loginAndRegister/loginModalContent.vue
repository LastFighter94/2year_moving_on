<script setup>
defineOptions({
    name: 'LoginModalContent',
})
</script>

<template>
    <input class="inputAuth" type="text" placeholder="Ваш email">
    <input class="inputAuth" type="password" placeholder="Ваш пароль">

    <div class="LoginModalContent-text">
        <span>Еще нет аккаунта?</span>
        <span>Забыли пароль?</span>
    </div>

    <button class="main-btn long-padding">Войти</button>
</template>


<style lang="scss" scoped>
.LoginModalContent-text {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
}

.long-padding {
    padding: 15px 60px;
}

@media (max-width: 400px){
    .LoginModalContent-text {
        font-size: 14px;
    }

    .long-padding {
        font-size: 14px;
        padding: 10px 30px;
    }
}
</style>
