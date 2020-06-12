const axios = require('axios')

const api = axios.create({
    baseURL: `https://swapi.dev/api/people`
})

async function getPerson(name) {
    const url = `/?search=${name}&format=json`
    const result = await api.get(url)
    // return mapPerson(result.data.results[0])
    return result.data.results.map(mapPerson)
}

// function mapPerson(data) {
//     const {name, mass} = data
//     return {name, mass}
// }

function mapPerson(item) {
    return {
        name: item.name,
        mass: item.mass
    }
}

module.exports = {
    getPerson
}