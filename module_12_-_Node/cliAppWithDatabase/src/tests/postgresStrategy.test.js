const assert = require('assert')
const Postgres = require('./../database/strategies/postgres')
const Context = require('./../database/strategies/base/contextStrategy')

const context = new Context(new Postgres())

describe('Postgres Strategy', () => {
    // timeout(Infinity) // this is not working
    it('PostgresSQL Connection', async () => {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
})