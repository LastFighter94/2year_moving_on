<template>
    <button type="button" id="nextBtn" class="btnsliderone btnsliderone-right">
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

.btnsliderone-right {
    background-image: url('@/assets/indexPage/salesOptionSection/right-arrow.svg');
    margin-left: 10px;
}

@media (max-width: 660px){
    .btnsliderone {
        display: none;
    }
}
</style>
