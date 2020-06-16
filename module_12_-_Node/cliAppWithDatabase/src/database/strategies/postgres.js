const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("The item was registered in Postegres")
    }
}

module.exports = Postgres