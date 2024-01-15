const db = require("../db")
const projectPaths = require("../projectPaths")
const fs = require('fs')

class structureController {
    async getDocumentStructure(req, res){
        let form_id = req.params['form_id']
        let errorArr = []

        let str = `select text_json from xx_forms where form_id = ${form_id}`
        let queryRes = await db.query(str)

        let result = res.json(queryRes.rows[0].text_json)

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }
    async getParentTableName(req, res){
        let form_id = req.params['form_id']
        let errorArr = []

        let parent_form_id = await db.query("select parent_form_id FROM xx_forms where form_id = $1", [form_id])
        parent_form_id = parent_form_id.rows[0].parent_form_id

        let str = `select table_name FROM xx_forms where form_id = ${parent_form_id}`
        let queryRes = await db.query(str)

        let result
        if (queryRes.rows.length > 0) result = res.json(queryRes.rows[0].table_name)
        else errorArr.push('Error')

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }
    async getTableHeaders(req, res){
        let form_id = req.params['form_id']
        let errorArr = []

        let tableName = await db.query("select table_name FROM xx_forms where form_id = $1", [form_id])
        tableName = tableName.rows[0].table_name

        let formFields = await db.query("select columntablekey, columntitle, type, sort, visible FROM xx_form_fields where form_id = $1", [form_id])
        let tableHeaders = await db.query("select column_name, data_type FROM information_schema.columns WHERE table_schema = 'public' AND table_name = $1", [tableName])

        formFields.rows.forEach(field => {
            if (tableHeaders.rows.find(header => header.column_name === field.columntablekey) === undefined){
                errorArr.push(`form_id = ${form_id}; не все заголовки таблицы = ${tableName} - совпадают с xx_form_fields`)
            }
        })

        let result = res.json(formFields.rows)

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }
    async getTableTitle(req, res){
        let form_id = req.params['form_id']
        let errorArr = []

        let tableTitle = await db.query("select table_title FROM xx_forms where form_id = $1", [form_id])
        tableTitle = tableTitle.rows[0].table_title

        let result = res.json(tableTitle)

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }
    async getTableName(req, res){
        let form_id = req.params['form_id']
        let errorArr = []

        let tableName = await db.query("select table_name FROM xx_forms where form_id = $1", [form_id])
        tableName = tableName.rows[0].table_name

        let result = res.json(tableName)

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }
    async getAllRows(req, res){
        let form_id = req.params['form_id']
        let errorArr = []

        // по form_id мы находим имя необходимой таблицы из xx_forms
        let tableName = await db.query("select table_name FROM xx_forms where form_id = $1", [form_id])
        tableName = tableName.rows[0].table_name

        let str = `select * from ${tableName}`
        let queryRes = await db.query(str)

        let result = res.json(queryRes.rows)

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }
    async isView(req, res){
        let form_id = req.params['form_id']
        let errorArr = []

        let isView = await db.query("select isview FROM xx_forms where form_id = $1", [form_id])
        isView = isView.rows[0].isview

        let result = res.json(isView)

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }

    // POST
    async setDocumentStructure(req, res){
        let errorArr = []

        let {textJson, formId} = req.body
        textJson = JSON.stringify(textJson)

        let str = `UPDATE xx_forms  SET text_json = '${textJson}' where form_id = ${formId};`
        const queryRes = await db.query(str)

        let result = res.json(queryRes.rows)

        if (errorArr.length === 0) return result
        else return res.json({errors: errorArr})
    }
    async updateRow(req, res){
        let z = []
        let arr = []

        Object.keys(req.body.rowInfo).forEach((i, index) => {
            arr.push(req.body.rowInfo[i])
            z.push(`${i} = $${index + 1}`)
        })

        console.log(req.body, 1000)

        z = z.join(', ')

        let str = `UPDATE ${req.body.tableName} set ${z} where id = ${req.body.rowInfo.id} RETURNING *`

        const row = await db.query(str, arr)

        return res.json(row.rows[0])
    }
    async uploadFiles(req, res){
        const neededPathTwo = projectPaths.uploadDIr + '/' + req.body.parentTableName + '/' + req.body.tableName + '/' + req.body.date;

        // async checking if dir exists or not
        try {
            await fs.promises.access(neededPathTwo);
        } catch (error) {
            createDir(neededPathTwo)
        }

        function createDir(dir){
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir, { recursive: true });
            } else {
                console.log('dd')
            }
        }

        req.files.files.forEach(i => {
            let uploadPath = neededPathTwo + '/' + i.name

            i.mv(uploadPath, function(err) {
                console.log('something')
                // не знаю нужен ли вообще здесь callback
            });
        })

        return res.json({test: 'test'})
    }
    async addRow(req, res){
        let strOne = '(' + Object.keys(req.body.rowInfo).join(', ') + ')'
        let z = []
        let arr = []

        Object.keys(req.body.rowInfo).forEach((i, index) => {
            arr.push(req.body.rowInfo[i])
            let num = index + 1
            z.push('$' + num)
        })

        let strTwo = '(' + z.join(', ') + ')'

        console.log(strOne)
        console.log(strTwo)
        console.log(arr)

        let strRes = `INSERT INTO ${req.body.tableName} ${strOne} values ${strTwo} RETURNING *`

        console.log(strRes)

        const row = await db.query(
            strRes,
            arr
        )
        return res.json(row.rows[0])
    }

    // DELETE
    async deleteRow(req, res){
        let row_id = req.params['row_id']
        let table_name = req.params['table_name']

        let str = `DELETE FROM ${table_name} where id = ${row_id}`
        const row = await db.query(str)

        return res.json(row.rows[0])
    }
}

module.exports = new structureController()
