const database = require("../../../dbConfig/db/models");

class CarteiraController {

    static async getAll(req,res) {
        try {
            const result = await database.Carteiras.findAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getOne(req,res) {
        const { id } = req.params
        try {
            const result = await database.Carteiras.findOne({
                where: {
                    id: Number(id)
                }
            })
            if (result) 
                res.status(200).send(result)
            else    
                res.status(404).send({ mensagem: "Essa carteira não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async addCarteira(req, res) {
        const newCarteira = req.body        
        const nameExist = await database.Carteiras.findOne({
            where: { nome: newCarteira.nome }
        })        
        if (nameExist) {
            res.status(200).send("Carteira já cadastrada")
        } else {
            try {
                const result = await database.Carteiras.create(newCarteira)
                res.status(200).send(result)
            } catch (error) {
                res.status(500).send(error.message)
            }
        }
    }

    static async editCarteira(req, res) {
        const { id } = req.params
        const updateCarteira = req.body        
        try {
            const result = await database.Carteiras.findOne({
                where: { id: Number(id) }
            })            
            if (result) {
                console.log(updateCarteira)
                await database.Carteiras.update(updateCarteira, 
                    { where: { id: Number(id) } })
                res.status(200).send(updateCarteira)
            }
            else    
                res.status(404).send({ mensagem: "Esse registro não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }

    }

    static async delCarteira(req, res) {
        const { id } = req.params       
        const nameExist = await database.Carteiras.findOne({
            where: {  id: Number(id)  }
        })        
        if (nameExist) {
            try {
                await database.Carteiras.destroy({
                    where: { id: Number(id) }
                })
                res.status(200).send({ mensagem: "Registro deletado com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Esse registro não existe"}) 
        }
    }
}

module.exports = CarteiraController