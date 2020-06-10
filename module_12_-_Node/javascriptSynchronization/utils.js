function time(time=null) {
    if (time) return time;
    return Math.ceil(Math.random() * 5000)
}

function printUser(user) {
    console.log(`user: {${user.id}, ${user.name}, ${user.cell}, ${user.adress}}`)
}

module.exports = {
    time,
    printUser
}