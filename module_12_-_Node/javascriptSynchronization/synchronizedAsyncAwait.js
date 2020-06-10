function time(time=null) {
    if (time) return time;
    return Math.ceil(Math.random() * 5000)
}

async function printUser() {
    console.time()
    await Promise.all([getUser(), getUserCell(), getUserAddress()])
    console.log(`user: {${user.id}, ${user.name}, ${user.cell}, ${user.adress}}`)
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
printUser()