import {createServer} from 'http'
import {parse} from 'querystring'

const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {
            response.writeHead(200, {
                "Content-Type": "application/json"
            })
            response.write(JSON.stringify({
                status: "ok"
            }))
            response.end()
            break
        }
        case '/authenticate': {
            let data = ''
            request.on('data', (chunk) => {
                data += chunk
            })
            request.on('end', () => {
                const params = parse(data)
                response.end()
            })
            break
        }
    
        default: {
            response.writeHead(404, 'Something went wrong')
            response.write("this page is not disponible or does not exists")
            response.end()
        }
    }
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

server.listen(8000, HOSTNAME, () => {
    console.log(`server is listenig at http://${HOSTNAME}:${PORT}`)
})