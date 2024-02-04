<template>
    <div>
        <h1>Test View</h1>

        <p @click="postRow">test - post day</p>

<!--        <form id="form" @submit.prevent="submitFormData" method="post" enctype="multipart/form-data">-->
<!--            <input type="text" name="firstName">-->
<!--            <input type="text" name="lastName">-->
<!--            <input type="file" name="file" multiple>-->
<!--            <button type="submit">Submit</button>-->
<!--        </form>-->
    </div>
</template>

<script>
// setTimeout(() => {
//     const form = document.getElementById('form');
//
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const fd = new FormData(form);
//         fetch('http://localhost:5000/api/upload', {
//             method: "POST",
//             body: fd
//         })
//
//         console.log(...fd)
//         console.log(fd)
//     })
//
// }, 1000)

// async submitFormData(){
//     const form = document.getElementById('form');
//     const fd = new FormData(form);
//     await API({requestParams: fd}, 'upload', 'allModules', 'UPLOAD')
//
//     // await axios.post('http://localhost:5000/api/upload', fd);
//
//     // const files = document.getElementById('files')
//     //
//     // console.log(files.files)
//     //
//     // const formData = new FormData()
//     //
//     // formData.append('fn', this.firstName)
//     // formData.append('ln', this.lastName)
//     //
//     // for (let i = 0; i < files.files.length; i++){
//     //     console.log(files.files[i])
//     //     formData.append("files", files.files[i])
//     // }
//     //
//     // console.log(...formData)
//     //
//     // await API({requestParams: formData}, 'add-files', 'allModules', 'POST')
// },

import {API} from "@/services/API";

export default {
    name: 'TestView',
    data(){
        return {
            dayParamsExample: {
                "date": '20-10-2023',
                "cigarettes": 10,
                "hookah": 1,
                "beer": 2,
                "whiskey": 1,
                "vodka": 1,
                "youtube": 2,
                "instagram": 1,
                "vk": 1,
                "porno": false,
                "yoga": true,
                "gym": true,
                "massage": true,
                "masturbate": 0,
                "sex": 2
            },
            firstName: 'test 1',
            lastName: 'test 2'
        }
    },
    methods: {
        async postRow(){
            let res = {
                rowInfo: this.dayParamsExample,
                tableName: 'table_days'
            }
            await API({requestParams: res}, 'add-row', 'allModules', 'POST')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
