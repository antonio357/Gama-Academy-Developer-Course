const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
const eventName = 'user:click'

myEmitter.on(eventName, (click) => {
    console.log(`emitting event (${click}) from ${eventName}`)
})

let clicksCounter = 0
// setInterval(() => {
//     myEmitter.emit(eventName, `click-${clicksCounter++}`)
// }, 1000)

const stdin = process.openStdin()

stdin.addListener('data', (input) => {
    console.log(`input = ${input.toString()}`)
})