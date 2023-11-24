const os = require('os')

// arch() - архитектура процессора
console.log(os.arch())

// platform() - darwin for mac (darwin, win32, linux)
console.log(os.platform())

if (os.platform() === 'darwin'){
    console.log('You are on a Mac')
} else if (os.platform() === 'win32'){
    console.log('You are on windows')
} else {
    console.log('You are in Linux')
}

// cpus() - array of each logical cpu core
console.log(os.cpus())

// freemem() - amount of free memory on system
console.log(os.freemem())
console.log(` Free memory ${os.freemem() / 1024 / 1024 / 1024} GB`)

// totalmem()
console.log(os.totalmem() / 1024 / 1024 / 1024)

// homedir
console.log(os.homedir())

// uptime - сколько секунд запущена система
console.log(os.uptime())
// Math.floor(uptime / 60 /60 / 24) дни
// Math.floor(uptime / 60 /60) % 24 часы
// Math.floor(uptime / 60) % 60 минуты
// Math.floor(uptime) % 60 секунды

const uptime = os.uptime()
console.log(uptime)

// hostname()
console.log(os.hostname())