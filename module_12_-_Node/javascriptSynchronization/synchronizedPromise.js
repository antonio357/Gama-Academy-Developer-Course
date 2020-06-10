function time(time=null) {
    if (time) return time;
    return Math.ceil(Math.random() * 5000)
}

function printUser() {
    console.log(`user: {${user.id}, ${user.name}, ${user.cell}, ${user.adress}}`)
}

function getUser() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            user = {
                id: 1,
                name: "tony",
            }  
            resolve()
        }, time()) 
    }).then(getUserCell)
}

function getUserCell() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            user = {
                ...user,
                cell: 31446514
            }
            resolve()
        }, time())
    }).then(getUserAddress)
}

function getUserAddress() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            user = {
                ...user,
                adress: 'conall stret'
            }
            resolve()
        }, time())
    }).then(printUser)
}

let user;
getUser()
