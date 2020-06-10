const {time, printUser} = require('./utils') 

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
    }).then(() => {printUser(user)})
}

let user;
getUser()
