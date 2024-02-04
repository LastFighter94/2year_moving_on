<template>
    <button type="button" id="nextBtnTwo" class="btnslidertwo btnslidertwo-right">
        <span class="strelka">&rsaquo;</span>
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

.btnslidertwo-right {
    /*background-image: url('@/assets/indexPage/salesOptionSection/right-arrow.svg');*/
    margin-left: 10px;
}

@media (max-width: 660px){
    /*.btnslidertwo {*/
    /*    display: none;*/
    /*}*/
}
</style>
