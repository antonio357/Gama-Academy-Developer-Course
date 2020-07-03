import {createServer} from 'http'
import {readFile} from 'fs'
import {resolve} from 'path'
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
            const params = parse(data)
            request.on('end', () => {
                console.log(parse(data))
                response.writeHead(301, {
                    Location: '/home'
                })
                response.end()
            })
            break
        }
        case '/sign-in': {
            const filePath = resolve(__dirname, './pages/sign-in.html')
            readFile(filePath, (error, file) => {
                if (error) {
                    response.writeHead(500, "HTML file read process failed")
                    response.end()
                    return
                }

                response.writeHead(200)
                response.write(file)
                response.end()
            })
            break
        }
        case '/home': {
            const filePath = resolve(__dirname, './pages/home.html')
            readFile(filePath, (error, file) => {
                if (error) {
                    response.writeHead(500, "HTML file read process failed")
                    response.end()
                    return
                }

                response.writeHead(200)
                response.write(file)
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