<template>
    <div class="container content md-mg-b-10">
        <span class="page-title md-mg-b-30">Управление аккаунтами</span>

        <div class="card md-p-20 desktop-card-content">
            <div class="md-mg-b-20 email-info">
                <div class="account-email md-mg-l-20">
                    <span>Почта аккаунта</span>
                    some-pochta1@yandex.ru
                </div>

                <div class="email-actions">
                    <button class="action-card-btn dark-bg">Сбросить пароль</button>
                    <button class="action-card-btn dark-bg">Ограничить аккаунт</button>
                    <button class="action-card-btn deny-bg">Отключить аккаунт</button>
                </div>
            </div>

            <div class="overflow-wrapper">
                <table class="data-table">
                    <thead>
                    <tr>
                        <td v-for="header in headers">{{header.rusTitle}}</td>
                    </tr>
                    </thead>

                    <tbody>
                        <tr v-for="info in data">
                            <td v-for="header in headers">
                                <template v-if="header.realKey !== 'active'">
                                    {{ info[header.realKey] }}
                                </template>

                                <template v-if="header.realKey === 'active'">
                                    <button class="action-card-btn deny-bg" v-if="info[header.realKey] === true">Приостановить</button>
                                    <button class="action-card-btn dark-bg" v-if="info[header.realKey] === false">Возобновить</button>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- tablet and mobile view -->

        <div class="phone-tablet-account-card-content">
            <div class="md-mg-b-20 email-info">
                <div class="account-email white-bg">
                    <span>Почта аккаунта</span>
                    some-pochta1@yandex.ru
                </div>

                <div class="email-actions">
                    <button class="action-card-btn dark-bg">Сбросить пароль</button>
                    <button class="action-card-btn dark-bg">Ограничить аккаунт</button>
                    <button class="action-card-btn deny-bg">Отключить аккаунт</button>
                </div>
            </div>

            <div class="card md-p-20 md-mg-t-20" v-for="info in data">
                <table class="card-phone-tablet">
                    <tr v-for="header in headers">
                        <td>
                            <!-- косяк в API -->

                            <!-- касательно "действия" -->

                            <span v-if="header.realKey === 'product'">Товар</span>

                            <span v-else>{{header.rusTitle}}</span>
                        </td>
                        <td>
                            <span v-if="header.realKey === 'active'">
                                <button class="action-card-btn deny-bg" v-if="info[header.realKey] === true">Приостановить</button>
                                <button class="action-card-btn dark-bg" v-if="info[header.realKey] === false">Возобновить</button>
                            </span>

                            <span v-else>{{info[header.realKey]}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import {headersAndDataById} from "@/views/adminPanel/headersAndDataById";

defineOptions({
    name: 'adminPanelAccount'
})

const {headers, data, initDataLoading} = await headersAndDataById(2)

console.log(headers.value, data.value)
</script>

<style scoped>
.phone-tablet-account-card-content {
    color: var(--color-dark);
    display: none;
}

@media (max-width: 640px){
    .phone-tablet-account-card-content {
        display: block;
    }
}

.account-email {
    border: 1px var(--color-dark) solid;
    width: fit-content;
    padding: 20px 150px 20px 20px;
    border-radius: 10px;
    display: inline-block;
    margin-right: 30px;
}

.account-email > span {
    color: var(--color-dark);
    font-weight: 500;
    font-size: 24px;
    display: block;
    margin-bottom: 10px;
}

@media (max-width: 460px){
    .account-email {
        margin-right: 0;
        width: auto;
    }
}

.email-actions {
    display: inline-block;
}

.email-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.email-actions button:not(:last-child){
    margin-bottom: 10px;
}

.email-info {
    display: flex;
}

@media (max-width: 640px){
    .email-info {
        display: flex;
    }
}

@media (max-width: 460px){
    .email-info {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

</style>
