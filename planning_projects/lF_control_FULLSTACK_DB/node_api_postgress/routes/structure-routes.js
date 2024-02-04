const Router = require('express')
const router = new Router()
const structureController = require("../controllers/structure-controller")

router.get('/get-document-structure/:form_id', structureController.getDocumentStructure)
router.get('/get-parent-table-name/:form_id', structureController.getParentTableName)
router.get('/get-table-headers/:form_id', structureController.getTableHeaders)
router.get('/get-table-title/:form_id', structureController.getTableTitle)
router.get('/get-table-name/:form_id', structureController.getTableName)
router.get('/get-all-rows/:form_id', structureController.getAllRows)
router.get('/is-view/:form_id', structureController.isView)

router.post('/set-document-structure', structureController.setDocumentStructure)
router.post('/update-row', structureController.updateRow)
router.post('/upload', structureController.uploadFiles)
router.post('/add-row', structureController.addRow)

router.delete('/delete-row/:row_id/:table_name', structureController.deleteRow)

module.exports = router
