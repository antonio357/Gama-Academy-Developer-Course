const {deepEqual, ok} = require('assert')
const DatabaseController = require('./databaseController')

const DEFAULT_HERO_TO_REGISTER = {
    name: "Flash",
    power: "Speed",
    id: 1
}
const DEFAULT_HERO_TO_UPDATE = {
    name: "Green Lantern",
    power: "Ring Energy",
    id: 2
}

describe("manipulating heros", () => {
    beforeEach(async () => {
        await DatabaseController.registerHero(DEFAULT_HERO_TO_REGISTER)
        // await DatabaseController.registerHero(DEFAULT_HERO_TO_UPDATE)
    })
    it('should find a hero on file', async () => {
        const expected = DEFAULT_HERO_TO_REGISTER
        const [result] = await DatabaseController.list(expected.id)
        deepEqual(result, expected)
    })
    it("should register a hero", async () => {
        const expected = DEFAULT_HERO_TO_REGISTER
        const result = await DatabaseController.registerHero(DEFAULT_HERO_TO_REGISTER)
        const [actual] = await DatabaseController.list(DEFAULT_HERO_TO_REGISTER.id)
        deepEqual(actual, expected)
    })
    // it.only("should update a hero by id", async () => {
    //     const expected = {
    //         ...DEFAULT_HERO_TO_UPDATE,
    //         name: 'Batman',
    //         power: "Money"
    //     }
    //     const newData = {
    //         name: 'Batman',
    //         power: "Money"
    //     }
    //     await DatabaseController.updateHero(DEFAULT_HERO_TO_UPDATE.id, newData)
    //     const [result] = await DatabaseController.list(DEFAULT_HERO_TO_UPDATE.id)
    //     deepEqual(result, expected)
    // })
    it.only('should remove a hero by id', async () => {
        const expected = true;
        const result = await DatabaseController.removeHero(DEFAULT_HERO_TO_REGISTER.id)
        deepEqual(result, expected)
    })
})