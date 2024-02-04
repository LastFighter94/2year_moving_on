<script setup>
import {ref, watch} from "vue";
import {API} from "@/services/API";
import PersonalCabinetTableCell from "@/views/personalCabinet/components/PersonalCabinetTableCell.vue";
import CustomSelect from "@/layout/uiKit/customSelect.vue";
import {useModalWindowsStore} from "@/layout/modalWindowsLogic/modalWindowsStore";
import {runIfError} from "@/layout/modalWindowsLogic/errorsModal/modalErrorLogic";

defineOptions({
    name: 'PersonalCabinetTable',
})

const props = defineProps(['tableId'])

const {
    tableId
} = props

const modalWindowsStore = useModalWindowsStore()

const tableName = ref('')
let headers = ref([])
let data = ref([])
const previewView = ref(true)
const sortValues = ref([
    {value: 'Сортировка по умолчанию', selected: true, realKey: 'defaultSort'},
])

if (tableId === 1) tableName.value = 'Лицензии'
if (tableId === 2) tableName.value = 'История покупок'

const getHeaders = async () => headers.value = await API(tableId, 'getheaders','personalCabinet', 'GET')
const getData = async () => data.value = await API(tableId, 'getdata','personalCabinet', 'GET')
const setPreviewInfoVisibility = () => {
    headers.value.forEach((i, index) => i.previewInfo = index < 2)
    previewView.value = true
}
const setAllInfoVisibility = () => {
    headers.value.forEach((i, index) => i.previewInfo = true)
    previewView.value = false
}

const initFunc = async () => {
    let headersQuery = await getHeaders()

    if (headersQuery?.error_msg){
        runIfError({
            text: 'Ошибка при получении headers',
            apiRoute: 'getheaders',
            module: 'personalCabinet'
        })
        return
    }

    await getData()

    // функция (скрываем вначале) для того чтобы при куче headers можно было скрывать до двух и до конца
    // открыть всю информацию, скрыть информацию
    setPreviewInfoVisibility()

    headers.value.forEach(i => {
        sortValues.value.push({
            realKey: i.realKey,
            value: i.rusTitle,
            selected: false
        })
    })

    console.log('component has been initialized!')
}

await initFunc()

const changeCheckboxKeyValue = (value, header, row) => {
    console.log('меняем данные, отправляем запрос на сервер и радуемся жизни', value, header.realKey, row)
}

const changeInfobind = (value, header, row) => {
    console.log('меняем данные, отправляем запрос на сервер и радуемся жизни', value, 'infobind')

    data.value.map(i => {
        if (i === row) i[header.realKey] = !value
    })
}

watch(
    () => sortValues.value,
    (newSortValue, oldSortValue) => {
        const sortKey = newSortValue.find(i => i.selected === true).realKey
        console.log('Непонятно причем здесь сортировка - тем более на таком количестве данных - ну да ладно', sortKey)
    },
    { deep: true }
)
</script>

<template>
    <div class="info-sections-desktop">
        <div class="info-section">
            <span class="md-p-l-40 md-mg-b-30 pc-info-text">{{ tableName }}</span>

            <div class="md-d-flex f-gap-40">
                <div class="input-div md-mg-b-40">
                    <input type="text" placeholder="Поиск">

                    <img src="@/assets/svg/search.svg" alt="">
                </div>

                <CustomSelect :listValues="sortValues"/>
            </div>

            <div class="card md-p-20 desktop-card-content">
                <div class="overflow-wrapper">
                    <table class="pc-table">
                        <thead>
                          <tr>
                              <td v-for="header in headers">{{header.rusTitle}}</td>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="row in data">
                              <td v-for="header in headers">
                                  <PersonalCabinetTableCell
                                      :row="row"
                                      :header="header"
                                      @changeCheckboxKeyValue="(value) => changeCheckboxKeyValue(value, header, row)"
                                      @changeInfobind="(value) => changeInfobind(value, header, row)"
                                  />
                              </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="info-sections-phone-tablet">
        <span class="pc-info-text md-mg-b-20">Лицензии</span>

        <div class="input-div md-mg-b-20">
            <input type="text" placeholder="Поиск">

            <img src="@/assets/svg/search.svg" alt="">
        </div>

        <CustomSelect :listValues="sortValues"/>

        <div class="card md-p-20 md-mg-t-20" v-for="row in data">
            <div class="phone-tablet-card">
                <template v-for="header in headers">
                    <div v-if="header.previewInfo">
                        <div class="phone-tablet-card-column">{{ header.rusTitle }}</div>

                        <div :class="['autopay', 'infobind'].includes(header.realKey) && 'phone-tablet-card-column-content'">
                            <PersonalCabinetTableCell
                                :row="row"
                                :header="header"
                                @changeCheckboxKeyValue="(value) => changeCheckboxKeyValue(value, header, row)"
                                @changeInfobind="(value) => changeInfobind(value, header, row)"
                            />
                        </div>
                    </div>
                </template>

                <div class="phone-tablet-card-settings" v-if="previewView" @click="setAllInfoVisibility">
                    Открыть всю информацию &nbsp;<img width="8" src="@/assets/svg/arrow-down.svg" alt="">
                </div>

                <div class="phone-tablet-card-settings" v-if="!previewView" @click="setPreviewInfoVisibility">
                    Скрыть информацию &nbsp;<img width="8" src="@/assets/svg/arrow-up.svg" alt="">
                </div>
            </div>
        </div>
    </div>

    <span style="display: block; height: 50px;"></span>
</template>

<style lang="scss" scoped>
.pc-info-text {
  font-size: 18px;
  font-weight: 600;
  display: block;
  color: var(--color-dark);
}

@media (max-width: 400px){
  .pc-info-text {
    font-size: 15px;
  }
}

@media (max-width: 640px){
  .info-sections-desktop {
    display: none;
  }

  .input-div {
    width: 100%;
  }

  .input-div input {
    width: 100%;
  }

  .custom-select {
    width: 100%;
  }

  .custom-select .options {
    width: 100%;
  }
}

@media (min-width: 640px){
  .info-sections-phone-tablet {
    display: none;
  }
}


.card-dark {
  border-radius: 15px;
  background: linear-gradient(#421999, #8837C4);
  color: #fff;
}

.card-dark h2 {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 10px;
}

/*  */

.pc-table {
  width: 100%;
  border-collapse: collapse;
  color: var(--color-dark);
}

.pc-table thead {
  font-weight: 600;
}

.pc-table tr td {
  border-bottom: 1px solid rgb(185, 185, 185);
  padding: 10px;
  min-width: 130px;
  max-width: 180px;
  word-wrap: break-word;
}

.pc-table tr td:last-child {
  text-align: center;
}

.phone-tablet-card-column-content {
  text-align: center;
  width: 100%;
}
</style>
