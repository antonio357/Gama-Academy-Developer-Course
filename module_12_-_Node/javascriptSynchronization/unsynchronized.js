function time(time=null) {
    if (time) return time;
    return Math.ceil(Math.random() * 5000)
}

function printUser() {
    console.log(`user: {${user.id}, ${user.name}, ${user.cell}, ${user.adress}}`)
}

function getUser() {
    setTimeout(() => {
        user = {
            id: 1,
            name: "tony",
        }
    }, time())
}

function getUserCell() {
    setTimeout(() => {
        user = {
            ...user,
            cell: 31446514
        }
    }, time())
}

function getUserAddress() {
    setTimeout(() => {
        user = {
            ...user,
            adress: 'conall stret'
        }
    }, time())
}

let user;
getUser()
getUserCell()
getUserAddress()
printUser()