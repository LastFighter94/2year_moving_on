<template>
    <footer id="footer">
            <div class="footer__text">
                Система информационного обеспечения и аналитики потребительского рынка
            </div>
            <div class="footer__logos">
                <img src="@/assets/city-logo1.png" alt=""/>
                <img src="@/assets/city-logo2.png" alt=""/>
            </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        //
    }),
}
</script>

<script setup>

</script>

<style lang="scss" scoped>

#footer {
    display: flex;
    background-color: white;
    justify-content: space-between;
    padding: 18px 20px;

    .footer__text{
        margin: auto 0;
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        color: #767784;
    }

    .footer__logos {
        display: flex;
    }

    .footer__logos > *{
        margin-right: 16px;
    }
    .footer__logos > *:last-child{
        margin-right: 0;
    }
}

</style>