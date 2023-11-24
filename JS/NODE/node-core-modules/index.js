const Logger = require('./logger')

const logger = new Logger()

logger.on('message', (data) => console.log('Called Listener:', data))

console.log('test')

logger.log('Hello World')
logger.log('Hello World1')
logger.log('Hello World2')
logger.log('Hello World3')