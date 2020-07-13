import express from 'express'
import cors from 'cors'
const server = express()

server.get('/status', (_, response) => {
    response.send({
        status: 'OK'
    })
})

const enableCors = cors({origin: 'http://localhost:3000'})
server.options('/authenticate', enableCors).post('/authenticate', enableCors, express.json(), (request, response) => {
    console.log(
        "email:", request.body.email,
        "password:", request.body.password
    )
    response.send({
        ok: true
    })
})


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

server.listen(8000, HOSTNAME, () => {
    console.log(`server is listenig at http://${HOSTNAME}:${PORT}`)
})