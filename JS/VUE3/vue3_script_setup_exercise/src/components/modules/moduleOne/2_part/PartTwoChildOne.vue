<script setup>
import {ref, computed} from "vue";

const people = ref([
    {name: 'Misha', age: 30, man: true},
    {name: 'Stepa', age: 23, man: true},
    {name: 'Vika', age: 18, man: false},
    {name: 'Katya', age: 48, man: false},
    {name: 'Vasya', age: 19, man: true},
    {name: 'Fedya', age: 58, man: true},
])
const liClassName = (p, index) => {
    let classesArr = []
    let classStr = ''
    if (p.man) classesArr.push('manClass')
    if (!p.man) classesArr.push('womanClass')
    if (p.age > 40) classesArr.push('oldPerson')

    classesArr.push(`mgl-${(index + 1)*10}`)

    classStr = classesArr.join(' ')

    return classStr
}

const skills = [
    {type: 'programming', name: 'JS'},
    {type: 'programming', name: 'Css'},
    {type: 'cooking', name: 'Cream soup'},
    {type: 'cooking', name: 'Meat'},
    {type: 'cooking', name: 'Борщ'},
    {type: 'programming', name: 'PHP'},
]

const toggleManClass = (p) => {
    p.man = !p.man
}

let inputValue = ref('InputValue')

let badWords = ['shit', 'bitch', 'fuck', 'ass']

const inputValueValidateFn = computed(() => {
    let badConditionsArr = [
        inputValue.value.length > 15,
        badWords.some(bWord => inputValue.value.includes(bWord))
    ]

    if (badConditionsArr.some(c => c === true)) return 'wrongInputDiv'
    return ''
})

let radioValue = ref('value radio one')
let selectValue = ref('text 1 value')
let checkboxValue = ref(true)

let selectedPeopleArr = ref([])

let isBtnDisabled = ref(true)
let hrefDynamicStrPart = ref('google.com')
</script>

<template>
    <p>V-for and style - bindings, v-if, v-show</p>

    <ul>
        <li
            v-for="(p, index) in people"
            class="base-class"
            :class="liClassName(p, index)"
            @click="toggleManClass(p)"
        >
<!--            :class="[p.man ? 'manClass' : 'womanClass', p.age > 40 && 'oldPerson']"-->
<!--            :class="['oldPerson', 'manClass']"-->
<!--            :class="{'manClass': p.man, 'womanClass': !p.man, 'oldPerson': p.age > 40}"-->
<!--            :class="{'testClass': p.man}"-->
<!--            :class="p.man && 'testClass'"-->
<!--            :class="p.man ? 'manClass' : 'womanClass'"-->
            Name: {{p.name}}, age: {{p.age}}
        </li>

<!--        Если нам необходимо пробежаться только по трем пунктам hack-->
<!--        <li v-for="p in 3">-->
<!--            Name: {{people[p].name}}, age: {{people[p].age}}-->
<!--        </li>-->
    </ul>

    <p>Inspect DOM to see difference between v-show and v-if</p>

    <div class="conditional-rendering">
        <h3>Cooking skills (v-show)</h3>
        <div v-for="{type, name} in skills">
            <p v-show="type === 'cooking'">{{name}}</p>
        </div>

        <h3>Programming skills (v-if)</h3>
        <div v-for="{type, name} in skills">
            <p v-if="type === 'programming'">{{name}}</p>
        </div>
    </div>

    <div>
        <h3>V-model</h3>

        <p>
            Можно класть значения которые мы передаем в input куда угодно - из inputValue в selectValue и наоборот, и так далее
        </p>

        <div :class="inputValueValidateFn">
            <input type="text" :placeholder="inputValue" v-model="inputValue">
            <span v-if="inputValueValidateFn === 'wrongInputDiv'">неправильно заполнено значение</span>
        </div>
<!--        <input type="text" :placeholder="inputValue" v-model="inputValue">-->
<!--        <input type="text" :placeholder="inputValue" v-model.lazy="inputValue">-->
<!--        <input type="text" :placeholder="inputValue" v-model.trim="inputValue">-->

        <p>{{inputValue}}</p>

        <input type="radio" value="value radio one" v-model="radioValue">
        <input type="radio" value="value radio two" v-model="radioValue">

        <p>{{radioValue}}</p>

        <p>
            <label>
                Select example
                <select v-model="selectValue">
                    <option value="text 1 value">text 1</option>
                    <option value="text 2 value">text 2</option>
                </select>
            </label>
        </p>

        <p>{{selectValue}}</p>

        <input type="checkbox" v-model="checkboxValue">

        <p>{{checkboxValue}}</p>

        <h4>Dynamic checkboxes bindings</h4>

        <template v-for="p in people">
            <p style="margin: 0"><input type="checkbox" v-model="selectedPeopleArr" :value="p.name">{{p.name}}</p>
        </template>

        <p>{{selectedPeopleArr}}</p>

        <h3>HTML attributes bindings</h3>

        <button :disabled="isBtnDisabled">btn text</button>
        <p style="margin: 0"><a :href="`https://www.${hrefDynamicStrPart}/`" target="_blank">Dynamic Link</a></p>
    </div>
</template>

<style scoped>
ul {margin: 0; padding: 0}
.base-class {list-style: none; }

.manClass {background: #a2ff74;}
.womanClass {background: indianred;}

.oldPerson {font-weight: 600}

.mgl-10 {margin-left: 10px}
.mgl-20 {margin-left: 20px}
.mgl-30 {margin-left: 30px}
.mgl-40 {margin-left: 40px}
.mgl-50 {margin-left: 50px}
.mgl-60 {margin-left: 60px}

/**/

.conditional-rendering {
    * {
        margin: 0;
    }
}

.wrongInputDiv {
    > input:focus {
        outline: 3px solid red;
    }

    > input {
        border: 1px solid red;
        color: red;
    }

    > span {
        display: inline-block;
        margin-left: 10px;
        font-size: 10px;
        color: red;
    }
}
</style>
