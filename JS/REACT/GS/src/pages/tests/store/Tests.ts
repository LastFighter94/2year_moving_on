import {makeAutoObservable} from "mobx";
import { makePersistable } from 'mobx-persist-store';

class Tests {
    // здесь внутри класса мы создаем переменные, которые будут являться состоянием
    testArr = [
        {
            question: '2+2 equals?',
            options: [1,2,3,4],
            answer: 4,
        },
        {
            question: '3+3 equals?',
            options: [2,3,6,5],
            answer: 6,
        }
    ]

    testNumber = 0

    // для теста кэшируемого значения (get total)
    testHundred = 100

    constructor() {
        makeAutoObservable(this) // параметром принимает контекст текущего класса
        makePersistable(this, { name: 'Test Store', properties: ['testArr', 'testNumber', 'testHundred'], storage: window.localStorage });
    }

    increment(){
        this.testNumber = this.testNumber + 1
        console.log('increment', this.testNumber)
    }
    decrement(){
        this.testNumber = this.testNumber - 1
        console.log('decrement', this.testNumber)
    }

    // если мы используем автоматическое слежение, то любая функция помеченная ключевым словом get будет
    // вычисляемым значением computed свойством
    get total(){
        return this.testHundred + this.testNumber
    }
}
const tests = new Tests()

export {tests};
