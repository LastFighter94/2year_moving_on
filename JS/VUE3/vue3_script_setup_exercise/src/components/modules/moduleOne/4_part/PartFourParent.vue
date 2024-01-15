<script setup>
import PartFourChild from "./PartFourChild.vue";
import {getCurrentInstance, ref} from "vue";

const component = getCurrentInstance();
// console.log(component.vnode, 'getCurrentInstance');

const addEditNoteRef = ref(null)

const testDefineExpose = () => {
    addEditNoteRef.value.focusInput()
}

const testDefineExposeTwo = () => {
    console.log(addEditNoteRef.value.inputRef.value)
}

const testAttrsVModelOne = ref('test attrs v-model 1')
const testAttrsVModelTwo = ref('test attrs v-model 2')

const changeAttrsContent = () => {
    testAttrsVModelOne.value += ' Change'
}

const cleanAttrsContent = () => testAttrsVModelOne.value = ''

const attrsObj = ref({
    oneKey: testAttrsVModelOne,
    twoKey: testAttrsVModelTwo
})
</script>

<template>
    <ChildWrapper>
        <PartFourChild ref="addEditNoteRef" v-model="attrsObj" class="attrs-test-inherit-class" :testProp="100" id="test">
            <template #title>
                TARGET SLOT (title)
            </template>
            <p>SLOT CONTENT</p>
        </PartFourChild>

        <button @click="testDefineExpose">test 1</button>
        <button @click="testDefineExposeTwo">test 2 (uncomment inputRef in defineExpose - to make it work)</button>

        <p>{{attrsObj}}</p>

        <p @click="changeAttrsContent" class="change-attrs-content">change attrs content</p>
        <p @click="cleanAttrsContent" class="change-attrs-content">cleanAttrsContent</p>
    </ChildWrapper>
</template>

<style scoped>
.change-attrs-content {
    display: block;
    padding: 10px;
    border: 1px solid black;
}
</style>
