const http = require('http')

// create server object
http.createServer((req, res) => {
    res.write('Hello')
    res.end()
}).listen(5001, () => console.log('Server running'))

