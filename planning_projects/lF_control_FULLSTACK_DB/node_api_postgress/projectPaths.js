const path = require('path')

const rootDir = __dirname
const uploadDIr = path.join(rootDir, '../upload')

const projectPaths = {
    rootDir: rootDir,
    uploadDIr: uploadDIr
}

module.exports = projectPaths
