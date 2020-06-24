const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')



class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._heros = null
        this._connect()
    }
    async isConnected() {
        try {
            await this._driver.authenticate()
            return true
        } catch (error) {
            console.log("failed", error)
            return false
        }
    }
    create(item) {
        console.log("The item was registered in Postegres")
    }
    async defineModel() {
        this._heros = driver.define('heros', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoImcrement: true
            },  
            name: {
                type: Sequelize.STRING,
                required: true
            },
            power: {
                type: Sequelize.STRING,
                required: true
            }
        }, {
            tableName: 'HERO_TABLE',
            freezeTableName: false,
            timestamps: false
        })
        await this._heros.sync()
    }
    _connect() {
        this._driver = new Sequelize(
            'gama_academy',
            'postgres',
            'password',
            {
                host: 'localhost',
                port: 5433,
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
    }
}

module.exports = Postgres