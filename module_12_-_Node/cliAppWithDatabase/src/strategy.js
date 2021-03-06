class NotImplementedException extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

class ICrud {
    create(item) {
        throw new NotImplementedException()
    }
    read(query) {
        throw new NotImplementedException()
    }
    update(id, item) {
        throw new NotImplementedException()
    }
    delete(id) {
        throw new NotImplementedException()
    }
}

class MongoDB extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("The item was registered in MongoDB")
    }
}

class Postgres extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log("The item was registered in Postegres")
    }
}

class ContextStrategy {
    constructor(strategy) {
        this._database = strategy
    }
    create(item) {
        return this._database.create(item)
    }
    read(item) {
        return this._database.read(item)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    delet(id) {
        return this._database.delet(id)
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()