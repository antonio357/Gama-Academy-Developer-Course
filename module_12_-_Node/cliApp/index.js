const Commander = require('commander')
const DatabaseController = require('./databaseController')
const Hero = require('./hero')

async function main() {
    Commander
    .version('v1')
    .option("-n, --name [value]", "hero name")
    .option("-p, --power [value]", "hero power")
    .option('-i, --id [value]', "hero id")
    
    .option("-r, --register", "register hero")
    .option("-l, --list", "list heros")
    .option("-rm, --remove", "remove a hero by id")
    .option("-up, --update [value]", "update a hero information by its id")
    .parse(process.argv)

    const hero = new Hero(Commander)
    try {
        if (Commander.register) {
            delete hero.id
            const result = await DatabaseController.registerHero(hero)
            if (!result) {
                throw Error("hero was not registered")
            }
            console.log('Hero registered')
        }
        if (Commander.list) {
            const result = await DatabaseController.list()
            if (!result) {
                throw Error("did not find register")
            }
            console.log(result)
        }
        if (Commander.remove) {
            const result = await DatabaseController.removeHero(hero.id)
            if (!result) {
                throw Error("hero was not found")
            } 
            console.log("hero removed")
        }
        if (Commander.update) {
            const heroIdToUpdate = parseInt(Commander.update)
            const data = JSON.stringify(hero)
            const heroUpdated = JSON.parse(data)
            const result = await DatabaseController.updateHero(heroIdToUpdate, heroUpdated)
            if (!result) {
                throw Error("hero was not updated")
            } 
            console.log("hero updated")
        }
    } catch (error) {
        console.error(error)
    }
}

main()