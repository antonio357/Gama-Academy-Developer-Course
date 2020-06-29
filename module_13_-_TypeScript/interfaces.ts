interface User {
    name: string,
    age: number,
    whatever?: any
}

function getUser(): User {
    return {
        name: "antonio",
        age: 32
    }
}

function setUser(user: User) {}