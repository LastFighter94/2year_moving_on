const path = require('path')

const myFilePath = 'subfolder/anotherfolder/index.js'

// basename()

const base1 = path.basename(myFilePath) // index.js
const base2 = path.basename(myFilePath, '.js') // index
console.log(base1)
console.log(base2)

// extname()

const ext = path.extname(myFilePath) // extension .js
console.log(ext)

// dirname()

const dir = path.dirname(myFilePath) // subfolder/anotherfolder/
console.log(dir)

// join()

const myPath = path.join('subfolder', 'anotherfolder', 'index.js') // subfolder/anotherfolder/index.js
console.log(myPath)

// resolve
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js') // absolute path
console.log(myPath2)


// __dirname (currently executing file)
console.log(__dirname)

// __filename (currecntly executing file with file name)
console.log(__filename)