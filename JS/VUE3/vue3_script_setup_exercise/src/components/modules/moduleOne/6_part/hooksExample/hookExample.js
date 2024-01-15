import {onMounted, ref} from "vue";

export function usePersonData(someParamKey, someParamValue){
    const personData = ref({
        name: 'Mike',
        age: 30,
        geoInfo: {
            city: 'Moscow',
            country: 'Russia',

            // чисто для теста пример - строчки ** в hookExample.spec.js
            test: 'test'
        }
    })

    // чисто для теста пример - строчки ## в hookExample.spec.js
    if (someParamValue === undefined) someParamValue = 'NO VALUE'

    personData.value[someParamKey] = someParamValue

    // это необязательно - просто демонстрируются возможности "композиции"
    onMounted(() => {
        personData.value.age = 100
    })

    // внутри можем использовать async-await логику - export function при этом оборачивать в них необязательно,
    // как и импортированную функцию в самом .vue файле

    // option 1
    // return personData

    // option 2
    return {
        personData
    }
}
