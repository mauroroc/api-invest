const database = require("../dbConfig/db/models")

class ModelService {
    constructor(modelName) {
        this.modelName = modelName
    }

    async getAll() {
        return await database[this.modelName].findAll();
    }

    async getAll(escopo) {
        return await database[this.modelName].scope(escopo).findAll();
    }

    async getAllByCarteira(carteira) {
        return await database[this.modelName].findAll({
            where: { idCarteira: carteira }
        });
    }

    async getOneById(id) {
        return await database[this.modelName].findOne({
            where: {
                id: Number(id)
            }
        })
    }

    async getOneByName(value) {
        const result = await database[this.modelName].findOne({
            where: { nome: value }
        })
        return result
    }

    async getOneByCode(value) {
        const result = await database[this.modelName].findOne({
            where: { codigo: value }
        })
        return result
    }

    async getOneByCpf(value) {
        const result = await database[this.modelName].findOne({
            where: { cpf: value }
        })
        return result
    }
    

    async getOneByPortfolio(carteira, ticker) {
        const result = await database[this.modelName].findOne({
            where: { idCarteira: carteira, idTicker: ticker }
        })
        return result
    }

    async create(item) {
        await database[this.modelName].create(item)
    }

    async edit(item, id) {
        await database[this.modelName].update(item, 
            { where: { id: Number(id) } })
    }

    async destroy(id) {
        await database[this.modelName].destroy( 
            { where: { id: Number(id) } })
    }

    async restore(id) {
        await database[this.modelName].restore( 
            { where: { id: Number(id) } })
    }

    //TODO: Outros metodos
}

module.exports = ModelService

    