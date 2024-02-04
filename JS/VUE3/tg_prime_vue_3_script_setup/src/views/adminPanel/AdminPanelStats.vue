<template>
    <div class="container content stat-content">
        <span class="page-title md-mg-b-30">Статистика</span>

        <div class="big-cards-stat-wrapper md-mg-b-40">
            <div class="card big-card-stat md-p-10">
                Активированных ключей

                <div class="jc-space-between al-i-center md-p-10">
                    <span class="nums bold-600">1539</span>

                    <div class="round-icon md-p-10">
                        <img src="@/assets/svg/key.svg" alt="">
                    </div>
                </div>

                <div class="al-i-center">
                    <img src="@/assets/svg/check-decagram.svg" alt=""> &nbsp; +94 в этом месяце
                </div>
            </div>

            <div class="card big-card-stat md-p-10">
                Активированных модулей

                <div class="jc-space-between al-i-center md-p-10">
                    <span class="nums bold-600">256</span>

                    <div class="round-icon md-p-10">
                        <img src="@/assets/svg/done.svg" alt="">
                    </div>
                </div>

                <div class="al-i-center">
                    <img src="@/assets/svg/check-decagram.svg" alt=""> &nbsp; +47 в этом месяце
                </div>
            </div>

            <div class="card big-card-stat md-p-10">
                Заработок за месяц

                <div class="jc-space-between al-i-center md-p-10">
                    <span class="nums bold-600">18216.25</span>

                    <div class="round-icon md-p-10">
                        <img src="@/assets/svg/calendar.svg" alt="">
                    </div>
                </div>

                <div class="al-i-center">
                    <img src="@/assets/svg/check-decagram.svg" alt=""> &nbsp; +9375 в этом месяце
                </div>
            </div>

            <div class="card big-card-stat md-p-10">
                Всего

                <div class="jc-space-between al-i-center md-p-10">
                    <span class="nums bold-600">190311.74</span>

                    <div class="round-icon md-p-10">
                        <img src="@/assets/svg/dollar.svg" alt="">
                    </div>
                </div>

                <span class="money">$8841.25</span>
            </div>
        </div>

        <div class="middle-cards-stat-wrapper md-mg-b-20">
            <div class="card middle-card-stat md-p-10">
                <span class="bold-600 md-d-block">Клонер:</span>
                168 / 10.916%
            </div>

            <div class="card middle-card-stat md-p-10">
                <span class="bold-600 md-d-block">Репортер:</span>
                234 / 15.204%
            </div>

            <div class="card middle-card-stat md-p-10">
                <span class="bold-600 md-d-block">Клонер каналов:</span>
                189 / 12.2807%
            </div>

            <div class="card middle-card-stat md-p-10">
                <span class="bold-600 md-d-block">Шпион:</span>
                281 / 18.2586%
            </div>
        </div>

        <div class="middle-cards-stat-wrapper md-mg-b-20">
            <button class="action-card-btn dark-bg">По месяцам (лицензии)</button>
            <button class="action-card-btn dark-bg">По месяцам (модули)</button>
            <button class="action-card-btn dark-bg">По ключам (лицензии)</button>
            <button class="action-card-btn dark-bg">По селлерам (модули)</button>
        </div>

        <template v-for="id in [3,4,5,6]">
            <AdminPanelStatsTable :tableId="id"/>
        </template>
    </div>
</template>

<script>
import AdminPanelStatsTable from "@/views/adminPanel/adminPanelStats/AdminPanelStatsTable.vue";

export default {
    name: 'adminPanelStats',
    components: {AdminPanelStatsTable}
}
</script>

<style>
.stat-content {
    color: var(--color-dark);
}

.big-cards-stat-wrapper {
    display: flex;
    gap: 10px;
}

.big-card-stat {
    width: 25%;
}

.big-card-stat .nums {
    font-size: 16px;
}

.big-card-stat .round-icon {
    background-color: var(--color-light);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
}

.big-card-stat img {
    width: 20px;
    height: 20px;
}

.big-card-stat .money {
    color: #2355F9;
}

@media (max-width: 700px){
    .big-card-stat {
        font-size: 14px;
    }

    .big-card-stat img {
        width: 15px;
        height: 15px;
    }

    .big-card-stat .round-icon {
        min-width: 40px;
        min-height: 40px;
    }
}

@media (max-width: 640px){
    .big-cards-stat-wrapper {
        flex-wrap: wrap;
        justify-content: center;
        gap: 0;
    }

    .big-cards-stat-wrapper > div:nth-child(1),
    .big-cards-stat-wrapper > div:nth-child(3) {
        margin-right: 20px;
    }

    .big-card-stat {
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }
}

@media (max-width: 400px){
    .big-cards-stat-wrapper {
        flex-wrap: wrap;
        justify-content: center;
        gap: 0;
    }

    .big-cards-stat-wrapper > div:nth-child(1),
    .big-cards-stat-wrapper > div:nth-child(3) {
        margin-right: 0;
    }

    .big-card-stat {
        width: 100%;
        margin-bottom: 20px;
    }
}

.middle-cards-stat-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

@media (max-width: 640px) {
    .middle-cards-stat-wrapper {
        padding: 0;
        margin-bottom: 20px;
    }
}

.table-stat-wrapper {
    border: 1px solid rgb(185, 185, 185);
    padding: 10px;
    border-radius: 10px;
}

.table-stat-wrapper .count-elements {
    color: var(--color-dark);
    opacity: 0.5;
}

@media (min-width: 640px){
    .table-stat-wrapper-phone-table {
        display: none;
    }
}

@media (max-width: 640px) {
    .table-stat-wrapper {
        display: none;
    }
}

.square-btn {
    border: 0;
    border-radius: 5px;
    color: var(--color-white);
    padding: 5px;
    font-size: 16px;
}

@media (max-width: 640px) {
    .square-btn {
        padding: 5px 15px;
    }
}

.square-btn-white {
    border: 1px solid var(--color-dark);
    border-radius: 5px;
    color: var(--color-dark);
    padding: 5px 10px;
    font-size: 16px;
}

@media (max-width: 400px) {
    .square-btn,
    .square-btn-white {
        font-size: 12px;
    }
}

.action-btns {
    display: flex;
    min-height: 40px;
}

@media (max-width: 400px){
    .action-btns {
        min-height: auto;
    }
}

@media (max-width: 640px){
    .action-btns-phone-tablet {
        display: flex;
    }
}

.stats-search-and-buttons {
    display: flex;
    justify-content: space-between;
}

.table-phone-stat-title {
    font-size: 20px;
    font-weight: 600;
}

.sort-div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

</style>
