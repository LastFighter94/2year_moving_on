<template>
    <div>
        <button class="project-btn clh-d-block clh-mt-1" @click="setDefaultDocumentStructure(formId, 'column')">setDefaultDocumentStructure</button> column
        <button class="project-btn clh-d-block clh-mt-1" @click="setDefaultDocumentStructure(formId, 'row')">setDefaultDocumentStructure</button> row

        <div class="clh-d-block clh-mt-2">
            <input type="number" v-model="formId"/> {{formId}} = formId
        </div>
    </div>
</template>

<script>
import {API} from "@/services/API";

export default {
    name: 'AdminView',
    data(){
        return {
            formId: 0
        }
    },
    methods: {
        async setDefaultDocumentStructure(formId, direction){
            // еще можно сделать проверку на form_id форм, которые существуют - и если за пределами, либо в
            // существующей форме нет fields - выдавать ошибку - эта функция для создания документа
            // по стандарту - где один таб основное, другой таб файлы, простая логика

            // для создания более сложной структуры - мы используем другую функцию, которая будет
            // подтягивать groups, tabs, а также можно использовать визуальный функционал админ-панели

            let tableHeaders = await this.getTableHeaders(formId)
            let defaultFormFields = structuredClone(tableHeaders)

            // рабочий вариант 1 - без подразделения на tabs в зависимости от количества view таблицы
            // let defaultDocumentStructure = {
            //     tabs: [
            //         {
            //             tabName: 'Основное',
            //             groups: [
            //                 {
            //                     isParentGroup: true,
            //                     // здесь мы можем задать направление групп с группами, row || column
            //                     // on main parent level
            //                     direction: direction,
            //                     // direction: 'column',
            //                     // direction: 'row',
            //                     groups: [
            //                         {
            //                             formFields: defaultFormFields
            //                         },
            //                         // example
            //
            //                         // {
            //                         //     groups: [
            //                         //         {formFields: defaultFormFields},
            //                         //         {formFields: defaultFormFields},
            //                         //         {formFields: defaultFormFields},
            //                         //         {formFields: defaultFormFields},
            //                         //     ]
            //                         // }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             tabName: 'Файлы'
            //         }
            //     ]
            // }

            let gHArr = ['yoga', 'gym', 'massage', 'sex']
            let bHArr = ['cigarettes', 'hookah', 'beer', 'whiskey', 'vodka', 'porno']
            let uncHArr = gHArr.concat(bHArr)

            let mainTabFields = defaultFormFields.filter(i => i.columntablekey === 'date')
            let goodHabbits = defaultFormFields.filter(i => gHArr.includes(i.columntablekey))
            let badHabbits = defaultFormFields.filter(i => bHArr.includes(i.columntablekey))
            let unclassifedHabbits = defaultFormFields.filter(i => !uncHArr.includes(i.columntablekey) && i.columntablekey !== 'date')

            // вариант с tabs подразделенными на количество view основной таблицы
            let defaultDocumentStructure = {
                tabs: [
                    {
                        tabName: 'Основное',
                        groups: [
                            {
                                isParentGroup: true,
                                direction: direction,
                                groups: [
                                    {
                                        formFields: mainTabFields
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tabName: 'Хорошие привычки',
                        groups: [
                            {
                                isParentGroup: true,
                                direction: direction,
                                groups: [
                                    {
                                        formFields: goodHabbits
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tabName: 'Плохие привычки',
                        groups: [
                            {
                                isParentGroup: true,
                                direction: direction,
                                groups: [
                                    {
                                        formFields: badHabbits
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tabName: 'Другие привычки',
                        groups: [
                            {
                                isParentGroup: true,
                                direction: direction,
                                groups: [
                                    {
                                        formFields: unclassifedHabbits
                                    }
                                ]
                            }
                        ]
                    },


                    {
                        tabName: 'Файлы'
                    }
                ]
            }

            console.log(defaultDocumentStructure)

            await this.setDocumentStructure(defaultDocumentStructure, formId)
        },

        async setDocumentStructure(documentStructure, formId){
            let res = {textJson: documentStructure, formId: formId}
            await API({requestParams: res}, 'set-document-structure', 'allModules', 'POST')
        },

        async getTableHeaders(formId){
            let tableHeaders = await API({requestParams: formId}, 'get-table-headers','allModules', 'GET')

            if (tableHeaders.errors === undefined) return tableHeaders
            else console.error(tableHeaders.errors)
        }
    }
}
</script>
