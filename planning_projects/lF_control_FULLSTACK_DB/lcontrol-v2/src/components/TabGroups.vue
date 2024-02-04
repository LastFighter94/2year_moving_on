<template>
    <div>
        <div class="groups" v-if="parentGroup" :class="parentGroup.direction">
            <div v-for="group in parentGroup.groups" class="group">
                <div v-if="group.groups === undefined && group.formFields !== undefined" class="fields">
                    <div v-for="field in group.formFields" class="field">
                        <span>{{field.columntitle}}</span>

                        <section v-if="currentRow">
                            <input
                                v-model="currentRow[field.columntablekey]"
                                type="text"
                            />
                            <!-- :disabled="field.columntablekey === 'date'" -->
                        </section>
                    </div>
                </div>

                <div v-else class="groups-in-group" :class="parentGroup.direction">
                    <div v-for="subGroup in group.groups" class="fields">
                        <div v-for="field in subGroup.formFields" class="field">
                            <span>{{field.columntitle}}</span>
                            <input v-if="currentRow" type="text" v-model="currentRow[field.columntablekey]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- files logic -->
        <div class="groups column" v-else>
            <div class="files">
                <form id="form" @submit.prevent="submitFormData" method="post" enctype="multipart/form-data" v-if="typeof(parentTableName) !== 'object'">
                    <!-- style none - так как three input нужны только для form data данных -->
                    <!-- style="display:none;" -->
                    <input type="text" id="parentTableName" name="parentTableName" :value="parentTableName" style="display:none;" readonly>
                    <input type="text" id="date" name="date" v-if="currentRow !== null" :value="currentRow.date" style="display:none;" readonly>
                    <input type="text" id="tableName" name="tableName" :value="tableName" style="display: none;" readonly>
                    <input type="file" name="files" multiple>
                    <p>
                        <button type="submit" class="project-btn clh-mt-1" @click="$emit('updateRow', currentRow)">submit</button>
                    </p>
                </form>

                <div v-else>
                    Test
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import {API} from "@/services/API";

export default {
    name: 'TabGroups',
    props: {
        currentRow: Object,
        tableName: String,
        isView: Boolean
    },
    data(){
        return {
            parentGroup: null,
            parentTableName: '',
            date: ''
        }
    },
    watch: {
        '$attrs': {
            handler: function() {
                if (
                    this.$attrs?.value?.groups !== undefined
                    && this.$attrs?.value?.groups[0].isParentGroup === true
                ){
                    this.parentGroup = this.$attrs.value.groups[0]

                    // todo 'вызывается два раза! Не использовать мощные вычисления здесь, а если да, то нужен fix!'
                    // console.log('superHardFunction')
                } else {
                    // логика для tab без групп - "файлы" и прочее
                    // console.log(this.$attrs.value.tabName === 'Файлы')
                    this.parentGroup = null
                }
            },
            deep: true
        },
        '$route.params.id': {
            handler: async function() {
                await this.init()
            },
            deep: true,
            immediate: true
        }
    },
    created(){
        this.init()
    },
    computed: {

    },
    methods: {
        async init(){
            this.parentTableName = await API({requestParams: this.$route.params.id}, 'get-parent-table-name','allModules', 'GET')
            // console.log(typeof(this.parentTableName), 999)
        },

        async submitFormData(){
            const form = document.getElementById('form');
            const fd = new FormData(form);

            await API({requestParams: fd}, 'upload', 'allModules', 'UPLOAD')

            document.getElementById('form').children[3].value = ''

            // todo
            // логика для isView - сделать reused и для основной таблицы

            // в upload на уровень ниже от корня API создавать папку (если ее еще нет) this.parentTableName а в ней уже
            // view tableName создавать папку (если ее еще нет), а уже в ней создавать
            // (если еще нет) папку day - а внутри него класть файлы

            // todo
            // создать табличку в которой будет имя файла изображения (которое на сервере) form_id view
            // и parent_table в котором это изображение лежит, а также фактический адрес от папки
            // upload - parent_table/form_id/day/imageName.type

            // ограничения на разовое количество вложенных файлов
            // ограничения на количество картинок в одном дне

            //

            // await axios.post('http://localhost:5000/api/upload', fd);

            // const files = document.getElementById('files')
            //
            // console.log(files.files)
            //
            // const formData = new FormData()
            //
            // formData.append('fn', this.firstName)
            // formData.append('ln', this.lastName)
            //
            // for (let i = 0; i < files.files.length; i++){
            //     console.log(files.files[i])
            //     formData.append("files", files.files[i])
            // }
            //
            // console.log(...formData)
            //
            // await API({requestParams: formData}, 'add-files', 'allModules', 'POST')
        },
    }
}
</script>

<style lang="scss" scoped>
.groups.column {
    display: flex;
    flex-direction: column;

    .group {
        margin-bottom: 10px;

        .fields {
            background-color: white;
        }
    }

    .group:last-child {
        margin-bottom: 0;
    }
}

.groups.row {
    display: flex;
    flex-direction: row;
    width: 100%;

    .group {
        margin-right: 10px;
        width: 100%;

        .fields {
            background-color: white;
        }
    }

    .group:has(.groups-in-group) {
        width: auto;
    }

    .group:last-child {
        margin-right: 0;
    }
}

.field {
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    > span {
        width: 150px;
        word-break: break-all;
    }

    input[type=text] {
        width: 100%;
        height: 30px;
        min-width: 200px;
    }
}

.groups-in-group {
    display: flex;
    flex-direction: row;
    gap: 10px;

    //.fields:not(:last-child) {
    //    border-right: 1px solid black;
    //}
}

.groups-in-group.column {
    overflow: auto;
}

.groups-in-group.row {
    overflow: hidden;
}

.files {
    background: white;
    padding: 5px;
}
</style>
