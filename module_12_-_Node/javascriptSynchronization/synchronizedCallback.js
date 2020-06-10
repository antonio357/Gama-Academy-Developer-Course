const {time, printUser} = require('./utils') 

function getUser(callback) {
    setTimeout(() => {
        user = {
            id: 1,
            name: "tony",
        } 
        callback() 
    }, time()) 
    
}

function getUserCell(callback) {
    setTimeout(() => {
        user = {
            ...user,
            cell: 31446514
        }
        callback()
    }, time())
}

function getUserAddress(callback) {
    setTimeout(() => {
        user = {
            ...user,
            adress: 'conall stret'
        }
        callback()
    }, time())
}

let user;
getUser(() => {
    getUserCell(() => {
        getUserAddress(() => {
            printUser(user)
        })
    })
})
