const http = require('http')
const fs = require('fs')

const posts = [
    {id: 1, title: 'Post One', body: 'This is post 1'},
    {id: 2, title: 'Post Two', body: 'This is post 2'},
]

const server = http.createServer((request, response) => {
    // response.end('Hello World')

    const url = request.url;

    console.log(request.url)

    if (url === '/'){
        fs.readFile('index.html', (error, file) => {
            if (error){
                response.writeHead(500, {'content-type': 'text/html'})
                response.end('<h1>Sorry we have a problem</h1>')
            } else {
                response.writeHead(200, {'content-type': 'text/html'})
                response.end(file)
            }
        })

        // response.writeHead(200, {'content-type': 'text/html'})
        // 'content-type': 'text/plaintext'
        // response.end('<h1>Welcome</h1>')
    } else if (url === '/about') {
        response.writeHead(200, {'content-type': 'text/html'})
        response.end('About')
    } else if (url === '/api/posts') {
        response.writeHead(200, {'content-type': 'application/json'})
        response.end(JSON.stringify({ success: true, data: posts }))
    } else {
        response.writeHead(404, {'content-type': 'text/html'})
        response.end('<h1>Page Not Found</h1>')
    }
})

server.listen(5001, () => {
    console.log('Server is listening on port 5000')
})

// 