const ModelService = require("../../model.service")
const carteiraServices = new ModelService("Carteiras")

class CarteiraController {

    static async getAll(req,res) {
        try {
            const result = await carteiraServices.getAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getAllInactive(req,res) {
        try {
            const result = await carteiraServices.getAll("inativo")
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getOne(req,res) {
        const { id } = req.params
        try {
            const result = await carteiraServices.getOneById(id)
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
        const nameExist = await carteiraServices.getOneByName(newCarteira.nome)
        if (nameExist) {
            res.status(200).send({ mensagem: "Carteira já cadastrada"})
        } else {
            try {
                await carteiraServices.create(newCarteira)
                res.status(200).send({ mensagem: "Carteira cadastrada" })
            } catch (error) {
                res.status(500).send(error.message)
            }
        }
    }

    static async editCarteira(req, res) {
        const { id } = req.params
        const updateCarteira = req.body        
        try {
            const result = await carteiraServices.getOneById(id)            
            if (result) {                
                await carteiraServices.edit(updateCarteira, id)
                res.status(200).send(updateCarteira)
            }
            else    
                res.status(404).send({ mensagem: "Essa carteira não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }

    }

    static async delCarteira(req, res) {
        const { id } = req.params       
        const result = await carteiraServices.getOneById(id)         
        if (result) {
            try {
                await carteiraServices.destroy(id)
                res.status(200).send({ mensagem: "Carteira excluída com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Essa carteira não existe"}) 
        }
    }

    static async restoreCarteira(req, res) {
        const { id } = req.params       
        const result = await carteiraServices.getOneById(id)        
        if (!result) {
            try {
                await carteiraServices.restore(id) 
                res.status(200).send({ mensagem: "Carteira restaurada com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Essa Carteira não precisa ser restaurada"}) 
        }
    }
}

module.exports = CarteiraController