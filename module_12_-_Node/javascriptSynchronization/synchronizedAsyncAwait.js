const {time, printUser} = require('./utils') 

async function main() {
    console.time()
    await Promise.all([getUser(), getUserCell(), getUserAddress()])
    printUser(user)
    console.log("as all the promisses were handled in parallel this is the time")
    console.timeEnd()
}

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user = {
                id: 1,
                name: "tony",
            } 
            resolve()
        }, time(1000)) 
    })
}

function getUserCell() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user = {
                ...user,
                cell: 31446514
            }
            resolve()
        }, time(1000))
    })
}

function getUserAddress() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user = {
                ...user,
                adress: 'conall stret'
            }
            resolve()
        }, time(1000))
    })
}

let user;
main()