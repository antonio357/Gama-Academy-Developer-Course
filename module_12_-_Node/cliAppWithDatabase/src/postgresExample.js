const Sequelize = require('sequelize')

const driver = new Sequelize(
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

async function main() {
    const heros = driver.define('heros', {
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
    await heros.sync()
    /* it didi not worked yet
    await heros.create({
        name: 'Zelda',
        power: 'Wisdom'
    }) 
    */
    const result = await heros.findAll({ raw: true })
    console.log("main -> result", result)
}

main()