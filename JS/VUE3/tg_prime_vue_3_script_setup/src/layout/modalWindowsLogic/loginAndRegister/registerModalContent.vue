<script setup>
defineOptions({
    name: 'RegisterModalContent',
})
</script>

<template>
    <input class="inputAuth" type="text" placeholder="Ваш email">
    <input class="inputAuth" type="password" placeholder="Ваш пароль">
    <input class="inputAuth" type="password" placeholder="Подтвердите пароль">

    <span class="registerModalContent-text">Уже есть аккаунт?</span>

    <button class="main-btn">Зарегистрироваться</button>
</template>


<style lang="scss" scoped>
.registerModalContent-text {
    display: block;
    padding: 20px;
}
</style>
