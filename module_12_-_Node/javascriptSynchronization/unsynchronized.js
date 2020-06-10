const {time, printUser} = require('./utils') 

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
printUser(user)