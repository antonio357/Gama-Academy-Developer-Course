import express from 'express'

const server = express()


server.get('/status', (_, response) => {
    response.send({
        status: 'OK'
    })
})

server.post('/authenticate', express.json(), (request, response) => {
    console.log(
        "email:", request.body.email,
        "password:", request.body.password
    )
    response.send()
})


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

server.listen(8000, HOSTNAME, () => {
    console.log(`server is listenig at http://${HOSTNAME}:${PORT}`)
})