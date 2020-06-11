const axios = require('axios')

const api = axios.create({
    baseURL: `https://swapi.dev/api/people`
})

async function getPerson(name) {
    const url = `/?search=${name}&format=json`
    const result = await api.get(url)
    return nameMass(result)
}

function nameMass(data) {
    const obj = {name:data.name, mass:data.mass}
    return obj
}

getPerson()

module.exports = {
    getPerson
}