class Dep { // Dep - это сокращение от Dependency
    constructor () {
        this.subscribers = [] // зависимые функции, которые надо
                              // запускать при вызове notify()
    }
    depend (target) { // замена функции record
        if (target && !this.subscribers.includes(target)){
            // только если есть target и этой функции ещё нет
            // в числе подписчиков на изменения
            this.subscribers.push(target)
        }
    }
    notify () { // замена функции replay
        this.subscribers.forEach(sub => sub())
        // запуск функций-подписчиков или наблюдателей
    }
}

const dep = new Dep()

function watcher(myFunc) {
    target = myFunc // активной функцией target становится функция myFunc
    dep.depend(target) // добавляем target в список подписчиков
    target() // вызываем функцию
    target = null // сбрасываем переменную target
}

let data = { price: 50, quantity: 2 }

// let price = 5
// let quantity = 2
let total = 0
let totalTwo = 0

watcher(() => total = data.price * data.quantity)
watcher(() => totalTwo = data.price * data.quantity * 3)

// watcher(() => total = price * quantity)
// watcher(() => totalTwo = price * quantity * 3)

// без watcher метод решения
// let target = () => { total = price * quantity }
// let targetTwo = () => { totalTwo = price * quantity * 3}
// target() // запустим функцию чтобы посчитать total
// targetTwo() // запустим функцию чтобы посчитать totalTwo
// dep.depend(target) // добавим функцию target в число подписчиков
// dep.depend(targetTwo) // добавим функцию target в число подписчиков

console.log(total, totalTwo) // 10, 30 - верное число
price = 20
console.log(total, totalTwo) // 10, 30 - это уже не то, что нам надо
dep.notify() // запустим функции - подписчики
console.log(total, totalTwo) // 40, 120 - теперь всё правильно