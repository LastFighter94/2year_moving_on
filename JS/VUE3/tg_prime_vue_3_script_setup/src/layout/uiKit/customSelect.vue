<template>
    <div class="customSelect">
        <div class="selectedValue">
            &nbsp;{{ currentValue }}

            <img src="@/assets/svg/arrow-down.svg" @click="showListValues = true" v-if="showListValues === false">
            <img src="@/assets/svg/arrow-up.svg" @click="showListValues = false" v-if="showListValues === true">
        </div>

        <div class="list-values" v-if="showListValues === true">
            <span v-for="listValue in listValues">
                <template v-if="listValue.selected === false">
                    <span @click="changeSelectedValue(listValue.value)">{{listValue.value}}</span>
                </template>
            </span>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

defineOptions({
    name: 'CustomSelect',
})

const props = defineProps(['listValues'])

const {
    listValues
} = props

const showListValues = ref(false)
const currentValue = ref('')

currentValue.value = listValues.find(i => i.selected === true).value

const changeSelectedValue = (value) => {
    listValues.map((i, index) => {
        if (i.value === value) {
            i.selected = true
            currentValue.value = value

            listValues.unshift(...listValues.splice(index,1));
        } else {
            i.selected = false
        }

        showListValues.value = false
    })
}
</script>

<style lang="scss" scoped>
/* custom select */

.customSelect {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: relative;
  color: #251F7E;
}

.customSelect .selectedValue {
  background-color: #FFF;
  border: 1px solid #B364E0;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 5px;
  z-index: 2;
  height: 40px;
  box-shadow: 0 0 5px rgb(195, 142, 185);
}

.customSelect img {
  width: 10px;
  height: 10px;
}

.customSelect:has(.list-values) {
  border-radius: 15px 15px 0 0;
  /*border-radius: 0;*/
  /*border-top-right-radius: 15px;*/
  /*border-top-left-radius: 15px;*/
}

.customSelect .list-values {
  top: 23px;
  left: 0;
  width: 100%;
  flex-direction: column;
  border: 1px solid #B364E0;
  border-top: 0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #FFF;
  position: absolute;
  display: flex;
  z-index: 1;
}

.customSelect .list-values > span {
    padding: 10px;
}
</style>
