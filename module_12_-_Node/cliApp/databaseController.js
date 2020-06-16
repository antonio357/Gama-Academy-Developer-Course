const {readFile, writeFile} = require('fs')
const {promisify} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class DatabaseController {
    constructor() {
        this.FILE_NAME = "heros.json"
    }
    async writeOnFile(data) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(data))
        return true
    }
    async registerHero(hero) {
        const data = await this.getFileData()
        const id = hero.id <= 2 ? hero.id : Date.now()
        const newHero = {
            id, ...hero
        }
        const newData = [
            ...data,
            newHero
        ]
        const result = await this.writeOnFile(newData)
        return result
    }
    async getFileData() {
        const file = await readFileAsync(this.FILE_NAME, 'utf8')
        return JSON.parse(file.toString())
    }
    async list(id) {
        const data = await this.getFileData()
        const filteredData = data.filter(hero => id ? hero.id === id : true)
        return filteredData
    }
    async updateHero(id, newAttributes) {
        const data = await this.getFileData()
        const index = data.findIndex(hero => hero.id === parseInt(id))
        if (index === -1) {
            throw Error("the hero does not exits")
        }
        const actual = data[index]
        const heroToUpdate = {
            ...actual,
            ...newAttributes
        }
        data.splice(index, 1)
        return await this.writeOnFile([ ...data, heroToUpdate])
    }  
    async removeHero(id) {
        if(!id) {
            return await this.writeOnFile([])
        }
        const data = await this.getFileData()
        const index = data.findIndex(hero => hero.id === parseInt(id))
        if(index === -1) {
            throw Error("the hero does not exits")
        }
        data.splice(index, 1)
        return await this.writeOnFile(data)
    } 
}

module.exports = new DatabaseController