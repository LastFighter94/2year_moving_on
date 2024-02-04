<template>
    <button type="button" id="prevBtn" class="btnsliderone btnsliderone-left">
    </button>
</template>

<style>
/* buttons */

.btnsliderone {
    width: 60px;
    height: 60px;
    background-color: transparent;
    border: none;
}

.btnsliderone:hover {
    cursor: pointer;
}

.btnsliderone-left {
    background-image: url('@/assets/indexPage/salesOptionSection/left-arrow.svg');
    margin-right: 10px;
}

@media (max-width: 660px){
    .btnsliderone {
        display: none;
    }
}
</style>
<script setup>
</script>
