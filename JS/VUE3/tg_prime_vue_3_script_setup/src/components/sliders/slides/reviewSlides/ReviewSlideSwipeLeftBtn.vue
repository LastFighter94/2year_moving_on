<template>
    <button type="button" id="prevBtnTwo" class="btnslidertwo btnslidertwo-left">
        <span class="strelka">&lsaquo;</span>
    </button>
</template>

<style>
/* buttons */
.strelka {
    position: absolute;
    top: -6px;
    color: white;
    font-size: 40px;
}

.btnslidertwo {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #262f6e;
    border-radius: 5px;
    border: 1px solid #262f6e;
}

.btnslidertwo:hover {
    cursor: pointer;
}

.btnslidertwo-left {
    /*background-image: url('@/assets/indexPage/salesOptionSection/left-arrow.svg');*/
    margin-right: 10px;
}

@media (max-width: 660px){
    /*.btnslidertwo {*/
    /*    display: none;*/
    /*}*/
}
</style>
<script setup>
</script>
