// write to a file

// Callback version
// const fs = require('fs')
// #####################

// fs.writeFile('file1.txt', 'hello world', (err) => {
//     if (err) throw err;
//     console.log('File created')
// })

// promise version
// const fs = require('fs/promises')
// #####################

// fs.writeFile('file1.txt', 'hello world')
//     .then(() => console.log('File created'))
//     .catch((err) => console.log(err))

// sync version
// const fs = require('fs')
// #####################

// fs.writeFileSync('file3.txt', 'hello world 3')
// console.log('file created')

// async await version
const fs = require('fs/promises')
// #####################


async function createFile(filename, content){
    try {
        await fs.writeFile(filename, content)
    } catch (error) {
        console.log(error)
    }
}

// read from a file

async function rFile(filename){
    try {
        const data = await fs.readFile(filename, 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// delete a file
async function deleteFile(filename){
    try {
        await fs.unlink(filename)
        console.log(`file ${filename} deleted`)
    } catch (error) {
        console.log(err)
    }
}

// rename a file
async function renameFile(oldName, newName){
    try {
        await fs.rename(oldName, newName)
        console.log(`file ${oldName} renamed to ${newName}`)
    } catch (error) {
        console.log(error)
    }
}

// deleteFile('file4.txt')

// rFile('file1.txt')
// rFile('file1.txt')
// rFile('file3.txt')

// renameFile('file3.txt', 'awesome.txt')

// createFile('file4.txt', 'hello world 4')



// create a folter
async function createFolder(folderName){
    try {
        await fs.mkdir(folderName)
        console.log(`Folder ${folderName} created`)
    } catch (error) {
        console.log(error)
    }
}

createFolder('testDir')