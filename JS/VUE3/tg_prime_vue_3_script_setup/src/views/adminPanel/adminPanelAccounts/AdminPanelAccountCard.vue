<template>
    <div class="card md-p-20">
        <div class="phone-tablet-card account-card-md" style="justify-content: normal;">
            <div v-for="(header, index) in headers">
                <!-- headers part -->
                <div class="phone-tablet-card-column">
                    <template v-if="header.realKey === 'email'">{{ header.rusTitle }}</template>

                    <template v-if="header.realKey !== 'email'">
                        {{ header.rusTitle }}

                        <span v-if="accountData[header.realKey].length > 1">
                            ({{ accountData[header.realKey].length }})

<!--                            здесь надо добавить ключи visible, invisible на ключи в данных, в которых лежат массивы объектов -->
<!--                            <img-->
<!--                                v-if="header.realKey === 'product_keys'"-->
<!--                                src="@/assets/svg/arrow-down.svg" alt=""-->
<!--                            >-->
                        </span>
                    </template>
                </div>

                <!-- data part -->
                <div :class="`account-card-content-div${index}`">
                    <template v-if="header.realKey === 'email'">{{ accountData[header.realKey] }}</template>

                    <!-- можно и другие проверки сделать - как душе угодно -->
                    <template v-if="header.realKey !== 'email'">
                        <template v-if="accountData[header.realKey]?.length > 1">
                            <p v-for="info in accountData[header.realKey]" style="padding-bottom: 10px;">
                                <span>{{info.value}}</span>
                            </p>
                        </template>

                        <template v-if="accountData[header.realKey]?.length < 2">
                            {{accountData[header.realKey][0].value}}
                        </template>
                    </template>
                </div>
            </div>

            <div class="phone-tablet-card-settings" style="margin: 0 0 0 auto;">
                <button>
                    <router-link :to="{ name: 'adminPanelAccount'}"><a>Управление</a></router-link>
                </button>
            </div>
        </div>
    </div>

    <span style="display: block; height: 30px;"></span>
</template>

<script>
export default {
    name: 'adminPanelAccountCard',
    props: {
        accountData: Object,
        headers: Array
    },
    setup(props, context) {

    }
}
</script>

<style>
.account-card-content-div0,
.account-card-content-div1,
.account-card-content-div2 {
    padding: 10px 0;
}

.account-card-content-div0 {
    width: 200px;
}

.account-card-content-div1 {
    width: 400px;
}

.account-card-content-div2 {
    width: 100%;
}

@media (max-width: 660px){
    .account-card-content-div0,
    .account-card-content-div1,
    .account-card-content-div2 {
        width: 100%;
    }

    .account-card-md {
        gap: 0;
    }
}
</style>
