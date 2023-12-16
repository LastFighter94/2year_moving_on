// компонент - это класс, в котором есть данные, которые хранятся в свойтве data
// - которое является объектом с ключами и значениями

// также в компоненте есть методы, которые могут вызывать друг друга и обращаться 
// к данным из data - все через this - для удобства

// также в компоненте есть шаблон, который может отображать данные, причем реактивно,
// на DOM элементы этого шаблона можно вешать абсолютно любые события

// в компоненте может быть другой компонент, внутрь которого мы можем передавать 
// свойства из родительского компонента, 

// а также мы можем из дочернего компонента
// вызывать функции родительского 
  
class Vue {
    constructor(data, methods){
        Object.entries(data).forEach(entry => {
            this[entry[0]] = entry[1]
        })

        Object.entries(methods).forEach(entry => {
            this[entry[0]] = entry[1]
        })

        this.template = this.interpolate()
    }

    interpolate(){
        let renderTemplate = structuredClone(template)
        for (var key in this) {
            if (typeof(this[key]) !== 'function') {
                if (typeof(this[key]) === 'object') {
                    renderTemplate = renderTemplate.replaceAll(`{{${key}}}`, JSON.stringify(this[key]))
                }

                renderTemplate = renderTemplate.replaceAll(`{{${key}}}`, this[key])
            }
        }

        document.getElementById('app').innerHTML = renderTemplate

        return renderTemplate
    }
}

const template = `
<div class="template">
        Test
        <p>This is a test template info!</p>
        <p>My name is {{name}}, my age is {{age}}</p>
        <i @click="testMethod(123)">click me</i>
        <br>
        <i onClick="componentOne.testMethod(111)">click me</i>
        <br>
        {{name}} {{age}}

        {{hobbi}}

        {{obj}}<br>
        {{test}}
<div>`

const data = {
    name: 'misha',
    age: 30,
    obj: {
        test: 1,
        testTwo: 200
    },
    test: 'tes390458903485t',
    hobbi: 'test'
}

const componentOne = new Vue(
    data,
    methods = {
        testMethod(arg){
            console.log(this.name)
            this.agePlus()
        },
        agePlus(){
            this.age += 1
            componentOne.interpolate()
        }
    }
)

Object.keys(data).forEach(key => {
    let keyValue = componentOne[key]

    Object.defineProperty(componentOne, key, {
        get(){
            return keyValue
        },
        set(newVal){
            keyValue = newVal
            componentOne.interpolate()
        }
    })
})

componentOne.age = 29956756
componentOne.name = 'yury786'
componentOne.test = '55555'
