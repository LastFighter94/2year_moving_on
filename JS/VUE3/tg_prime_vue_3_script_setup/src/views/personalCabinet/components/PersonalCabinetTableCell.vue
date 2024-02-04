<template>
    <template v-if="typeof(row[header.realKey]) !== 'boolean'">
        {{row[header.realKey]}}
    </template>

    <template v-if="typeof(row[header.realKey]) === 'boolean' && ['status', 'autopay'].includes(header.realKey)">
        <!-- styles этого чекбокса находятся в ui_kit - который глобально в app.vue импортирован, -->
        <!-- если будет хотя бы еще один чек-бокс, вынести в компонент -->
        <label class="switch">
            <input type="checkbox"
                   v-model="row[header.realKey]"
                   :checked="row[header.realKey]"
                   @change="$emit('changeCheckboxKeyValue', row[header.realKey]);"
            >
            <span class="slider round"></span>
        </label>
    </template>

    <template v-if="typeof(row[header.realKey]) === 'boolean' && header.realKey === 'infobind'">
        <button
            v-if="row[header.realKey] === true"
            class="action-card-btn deny-bg"
            @click="$emit('changeInfobind', row[header.realKey]);"
        >
            Отвязать
        </button>
        <span
            class="infobind-text"
            v-if="row[header.realKey] === false"
            @click="$emit('changeInfobind', row[header.realKey]);"
        >
            Не привязано
        </span>
    </template>
</template>

<script>
export default {
    inheritAttrs: false
}
</script>

<script setup>
defineEmits(['changeCheckboxKeyValue', 'changeInfobind'])

const props = defineProps(['row', 'header'])

const {
    row, header
} = props

defineOptions({
    name: 'PersonalCabinetTableCell',
})
</script>

<style lang="scss" scoped>
.infobind-text:hover {
    cursor: pointer;
}
</style>
