<template>
    <span v-for="link in links">
        <router-link :to="{ name: link.name}"><a @click="$emit('closeMenu')">{{ link.text }}</a></router-link>
    </span>
</template>

<script setup>
defineEmits(['closeMenu'])

defineOptions({
    name: 'NavBarAdminPanelMenu'
})

const links = [
    {name: 'adminPanelAccounts', text: 'Управление аккаунтами'},
    {name: 'adminPanelMessages', text: 'Создать рассылку'},
    {name: 'adminPanelStats', text: 'Статистика'},
]
</script>

<style lang="scss" scoped>

</style>
