// let data = { price: 5, quantity: 2 }

// let internalValue = data.price // начальное значение

// Object.defineProperty(data, 'price', { // назначим геттер и сеттер только свойству price

//     get() { // геттер
//         console.log(`Getting price: ${internalValue}`)
//         return internalValue
//     },

//     set(newVal) {
//         console.log(`Setting price to: ${newVal}`)
//         internalValue = newVal
//     }
// })

// total = data.price * data.quantity // при обращении к свойству вызывается геттер
// data.price = 20 // при установке свойства вызывается сеттер

// Более совершенная версия - которая работает на каждый ключ объекта

// let data = { price: 5, quantity: 2 }

// Object.keys(data).forEach(key => { // выполняем этот код для каждого свойства объекта data
//     let internalValue = data[key]
//     Object.defineProperty(data, key, {
//         get() {
//             console.log(`Getting ${key}: ${internalValue}`)
//             return internalValue
//         },
//         set(newVal) {
//             console.log(`Setting ${key} to: ${newVal}`)
//             internalValue = newVal
//         }
//     })
// })
// let total = data.price * data.quantity
// data.price = 20
// // data.quantity = 20



// FULL VERSION

// let data = { price: 5, quantity: 2 }
// let target = null

// // Это - тот же самый класс, который мы уже рассматривали
// class Dep {
//     constructor () {
//         this.subscribers = []
//     }
//     depend () {
//         if (target && !this.subscribers.includes(target)){
//             this.subscribers.push(target)
//         }
//     }
//     notify () {
//         this.subscribers.forEach(sub => sub())
//     }
// }

// Эту процедуру мы тоже уже рассматривали, но
// здесь она дополнена новыми командами
// Object.keys(data).forEach(key => {
//     // console.log(1);
//     let internalValue = data[key]
//     // console.log(internalValue)

//     // С каждым свойством будет связан собственный
//     // экземпляр класса Dep
//     const dep = new Dep()

//     Object.defineProperty(data, key, {
//         get() {
//             dep.depend() // запоминаем выполняемую функцию target
//             console.log(key, dep)
//             return internalValue
//         },
//         set(newVal) {
//             internalValue = newVal
//             dep.notify() // повторно выполняем сохранённые функции
//         }
//     })
// })

// // Теперь функция watcher не вызывает dep.depend(),
// // так как этот вызов выполняется в геттере
// function watcher(myFunc){
//     console.log(1)
//     target = myFunc
//     console.log(2)
//     target() 
//     // здесь срабавает getter так как мы вызываем функцию из
//     // watch - которая вызывает свойства
//     console.log(3)
//     target = null
//     console.log(4)
// }

// watcher(() => {
//     data.total = data.price * data.quantity
// })

// watcher(() => {
//     data.totalTwo = data.price * data.quantity * 3
// })






let data = {price: 5, quantity: 2}
let target = null

class Dep {
    constructor(){
        this.subscribers = []
    }

    depend(){
        if (target && !this.subscribers.includes(target)){
            this.subscribers.push(target)
        }
    }

    notify(){
        this.subscribers.forEach(sub => sub())
    }
}

Object.keys(data).forEach(key => {
    let internalValue = data[key]

    const dep = new Dep()

    Object.defineProperty(data, key, {
        get(){
            dep.depend()
            return internalValue
        },
        set(newVal){
            internalValue = newVal
            dep.notify()
        }
    })
})

function watcher(myFunc){
    target = myFunc
    target()
    target = null
}

watcher(() => {
    data.total = data.price * data.quantity
})