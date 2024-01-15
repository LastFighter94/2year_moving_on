<script setup lang="ts">
import PartFourChild from "./PartFourChild.vue";
import {getCurrentInstance, Ref, ref, UnwrapRef} from "vue";
import {logTs} from "@/globHelpers/logTs.js";

const component = getCurrentInstance();
if (component?.vnode) {
    logTs(`${component.vnode}, getCurrentInstance TS - cтранно работает с TS - без него лучше этот функционал пашет`);
}


const addEditNoteRef = ref<InstanceType<typeof ChildComponent>>()
// const addEditNoteRef = ref<HTMLDivElement>()

const testDefineExpose = (): void => {
    addEditNoteRef.value.focusInput()
}

const testDefineExposeTwo = (): void => {
    logTs(addEditNoteRef.value.inputRef.value)
}

const testAttrsVModelOne = ref<string>('test attrs v-model 1')
const testAttrsVModelTwo = ref<string>('test attrs v-model 2')

const changeAttrsContent = () => {
    testAttrsVModelOne.value += ' Change'
}

const cleanAttrsContent = () => testAttrsVModelOne.value = ''

interface IAttrsObj {
    oneKey: Ref<UnwrapRef<string>>,
    twoKey: Ref<UnwrapRef<string>>
}

const attrsObj = ref({
    oneKey: testAttrsVModelOne,
    twoKey: testAttrsVModelTwo
})

// const attrsObj = ref<IAttrsObj>({
//     oneKey: testAttrsVModelOne,
//     twoKey: testAttrsVModelTwo
// })
</script>

<template>
    <ChildWrapper>
        <PartFourChild ref="addEditNoteRef" v-model="attrsObj" class="attrs-test-inherit-class" :testProp="10" id="test">
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
