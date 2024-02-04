<template>
    <div class="table-wrapper">
        <table class="data-table">
            <thead>
            <tr>
                <th v-for="header in tableHeadersArr">{{header.columntitle}}</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="row in tableDataArr">
                <td v-for="header in tableHeadersArr" @click="editRow(row)">{{row[header.columntablekey]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {tableOptions} from "@/services/tableOptions";
import {API} from "@/services/API";

export default {
    name: 'TableData',
    data(){
        return {
            tableDataArr: []
        }
    },
    props: {
        reRenderRows: Number,
        tableHeadersArr: Array
    },
    watch: {
        '$route.params.id': {
            handler: async function() {
                await this.init()
            },
            deep: true,
            immediate: true
        },
        reRenderRows: {
            handler: async function() {
                this.tableDataArr = await this.getAllRows(this.routeId)
            },
        }
    },
    methods: {
        async init() {
            this.routeId = this.$route.params.id

            this.tableDataArr = await this.getAllRows(this.routeId)
            this.tableOptions = tableOptions[this.routeId]
            //
            // console.log(this.tableDataArr, 'tableDataArr')
        },
        async getAllRows(formId){
            let rows = await API({requestParams: formId}, 'get-all-rows','allModules', 'GET')

            if (rows.errors === undefined) return rows
            else console.error(rows.errors)
        },

        editRow(row){
            this.$emit('editRow', row)
        }
    }
}
</script>

<style lang="scss" scoped>
.table-wrapper {
    border: 1px solid black;
    max-height: 400px;
    overflow: auto;
    width: 100%;
}

table {
    width: 100%;
}

.data-table {
    border-collapse: collapse;
    width: 100%;

    tbody tr, thead tr {
        border-bottom: 1px solid black;
    }

    tbody tr:last-child{
        border-bottom: 0;
    }

    tbody tr td, thead tr th {
        padding: 10px;
        min-width: 100px;
    }

    thead tr th {
        text-align: left;
    }

    thead{
        background-color: #42b983;
        position: sticky;
        top: 0;
    }
}
</style>
