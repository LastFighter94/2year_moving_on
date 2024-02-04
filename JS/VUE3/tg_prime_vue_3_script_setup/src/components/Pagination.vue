<template>
    <div v-if="data.length > itemsPerTable">
        <div class="count-elements">
            Показано {{ itemsPerTable }} из {{data.length}} элементов
        </div>

        <div class="md-d-flex">
            <div class="page" @click="$emit('paginate', 'first_page')">&#x276E;&#x276E;</div>
            <div class="page" @click="$emit('paginate', 'prev')">&#x276E;</div>
            <div class="page">
                <!-- currentPage -->
                <slot></slot>
            </div>
            <div class="page" @click="$emit('paginate', 'next')">&#x276F;</div>
            <div class="page" @click="$emit('paginate', 'last_page')">&#x276F;&#x276F;</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['itemsPerTable', 'data'])

const {
    itemsPerTable, data
} = props

defineEmits(['paginate'])
</script>

<style lang="scss" scoped>

</style>
