<template>
    <div class="table-view">
        <h1>Table View</h1>

        <div class="day-habits-data">
            <TableOptions @createRow="createRow" :tableTitle="tableTitle"/>

            <TableData
                :reRenderRows="reRenderRows"
                :tableHeadersArr="tableHeadersArr"
                @editRow="editRow"
            />

            <DocumentWindow
                v-if="initializeCompleted"
                :isView="isView"
                :tableTitle="tableTitle"
                :tableName="tableName"
                @postRow="(row) => postRow(row)"
                @updateRow="(row) => updateRow(row)"
                @deleteRow="(row) => deleteRow(row)"
                v-show="showDocument"
                @closeDocument="showDocument = false"
                :currentRow="currentRow"
            />
        </div>
    </div>
</template>

<script>
import TableOptions from "@/components/TableOptions.vue";
import TableData from "@/components/TableData.vue";
import DocumentWindow from "@/components/DocumentWindow.vue";
import {API} from "@/services/API";

export default {
    name: 'TableView',
    components: {DocumentWindow, TableOptions, TableData},
    data(){
        return {
            showDocument: false,
            reRenderRows: 0,

            currentRow: null,
            createRowInfo: {
                create: true
            },

            tableHeadersArr: [],
            tableTitle: '',
            tableName: '',
            isView: false,

            initializeCompleted: false
        }
    },
    watch: {
        '$route.params.id': {
            handler: async function () {
                await this.init()
            },
            deep: true,
            immediate: true
        },
    },
    methods: {
        async init(){
            let routeId = this.$route.params.id

            // getting table headers
            this.tableHeadersArr = await this.getTableHeaders(routeId)

            // filling create-row-info
            this.tableHeadersArr.forEach(header => this.createRowInfo[header.columntablekey] = '')

            // getting table name
            this.tableTitle = await this.getTableTitle(routeId)

            // getting table name
            this.tableName = await this.getTableName(routeId)

            // check if table is view
            this.isView = await this.checkIsView(routeId)

            this.initializeCompleted = true
        },
        editRow(row){
            // without structure clone - data will also rerender in tableData (because emitted from tableData) =)
            this.currentRow = structuredClone(row)
            this.showDocument = true
        },
        createRow(){
            // without structure clone - currentRow will be absolute createRowInfo link - so v-model in child
            // component (documentWindow) - will not work
            this.currentRow = structuredClone(this.createRowInfo)
            this.showDocument = true
        },
        async postRow(row){
            delete row['create']
            let res = {
                rowInfo: row,
                tableName: this.tableName
            }
            await API({requestParams: res}, 'add-row', 'allModules', 'POST')

            this.reRenderRows++
            this.showDocument = false
        },
        async updateRow(row){
            let res = {
                rowInfo: row,
                tableName: this.tableName
            }
            await API({requestParams: res}, 'update-row', 'allModules', 'POST')

            this.reRenderRows++
            this.showDocument = false
        },
        async deleteRow(row){
            await API({requestParams: {
                    rowId: row.id,
                    tableName: this.tableName
                }}, 'delete-row','allModules', 'DELETE')

            this.reRenderRows++
            this.showDocument = false
        },
        async getTableHeaders(formId){
            let tableHeaders = await API({requestParams: formId}, 'get-table-headers','allModules', 'GET')

            tableHeaders = tableHeaders.sort(function (a, b) {
                if (+a.sort < +b.sort) return -1;
                if (+a.sort > +b.sort) return 1;
                return 0;
            });

            if (tableHeaders.errors === undefined) return tableHeaders
            else console.error(tableHeaders.errors)
        },
        async getTableTitle(formId){
            let tableTitle = await API({requestParams: formId}, 'get-table-title','allModules', 'GET')

            if (tableTitle.errors === undefined) return tableTitle
            else console.error(tableTitle.errors)
        },
        async getTableName(formId){
            let tableName = await API({requestParams: formId}, 'get-table-name','allModules', 'GET')

            if (tableName.errors === undefined) return tableName
            else console.error(tableName.errors)
        },
        async checkIsView(formId){
            let isView = await API({requestParams: formId}, 'is-view','allModules', 'GET')

            if (isView.errors === undefined){
                if (+isView === 0) return false
                if (+isView === 1) return true
            } else {
                console.error(isView.errors)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.table-view {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.day-habits-data {
  display: flex;
  align-items: start;
  flex-direction: column;
}
</style>
