import {usePersonData} from "@/components/modules/moduleOne/6_part/hooksExample/hookExample.js";
import {describe, test, expect} from "vitest";
import {ref} from "vue";

describe('testing hook functional', () => {
    test('usePersonData - test function result', () => {
        let objKey = {testValueThree: 'hello vitest'}

        const keyValueArr = [
            {key: 'test value 1', value: 100},
            {key: objKey, value: ['string', 200]},

            // ##
            // ##
            {key: 'test value 3', value: undefined},
            {key: 'test value 4'}
        ]

        keyValueArr.forEach(i => {
            let res = usePersonData(i.key, i.value)

            // **
            // **
            const assertionRes = ref(res.personData._rawValue)

            // **
            // **
            // const assertionRes = ref({
            //     name: 'Mike',
            //     age: 30,
            //     geoInfo: {
            //         city: 'Moscow',
            //         country: 'Russia'
            //     }
            // })

            if (i.value === undefined) assertionRes.value[i.key] = 'NO VALUE'
            else assertionRes.value[i.key] = i.value

            console.log(res.personData._rawValue, 100)
            console.log(assertionRes._rawValue, 200)

            expect(res.personData._rawValue).toStrictEqual(assertionRes._rawValue)
        })
    })
})
