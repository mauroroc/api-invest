const ModelService = require("../../model.service")
const tickerServices = new ModelService("Tickers")
const portfolioServices = new ModelService("Portfolios")
const carteiraServices = new ModelService("Carteiras")
var validator = require('validator')

class TickerController {

    static async getAll(req,res) {
        try {
            const result = await tickerServices.getAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getOne(req,res) {
        const { id } = req.params
        try {
            const result = await tickerServices.getOneById(id)
            if (result) 
                res.status(200).send(result)
            else    
                res.status(404).send({ mensagem: "Esse ticker não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async addTicker(req, res) {
        const newTicker = req.body  
        
        const isCode = validator.isLength(newTicker.codigo, {min:5,max:7})
        if(!isCode) res.status(401).send("Codigo precisa ter entre 5 e 7 caracteres")        
        
        const codeExist = await tickerServices.getOneByCode(newTicker.codigo)        
        if (codeExist) {
            res.status(200).send("Ticker já cadastrado")
        } else {
            try {
                const result = await tickerServices.create(newTicker)
                res.status(200).send(result)
            } catch (error) {
                res.status(500).send(error.message)
            }
        }
    }

    static async editTicker(req, res) {
        const { id } = req.params
        const updateTicker = req.body 
        
        if(updateTicker.codigo) {
            const isCode = validator.isLength(updateTicker.codigo, {min:5,max:7})
            if(!isCode) res.status(401).send("Codigo precisa ter entre 5 e 7 caracteres") 
        }
        
        try {
            const result = await tickerServices.getOneById(id)            
            if (result) {                
                await tickerServices.edit(updateTicker, id)
                res.status(200).send({ mensagem: "Ticker alterado" })
            }
            else    
                res.status(404).send({ mensagem: "Esse Ticker não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }

    }

    static async delTicker(req, res) {
        const { id } = req.params       
        const result = await tickerServices.getOneById(id)
        if (result) {
            try {
                await tickerServices.destroy(id)
                res.status(200).send({ mensagem: "Ticker deletado com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Esse Ticker não existe"}) 
        }
    }

    static async restoreTicker(req, res) {
        const { id } = req.params       
        const result = await tickerServices.getOneById(id)       
        if (!result) {
            try {
                await tickerServices.restore(id)
                res.status(200).send({ mensagem: "Ticker recuperado com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Esse Ticker não precisa ser restaurado"}) 
        }
    }

    static async getAllByCarteira(req, res) {
        const carteira = req.params.idCarteira
        try {
            const result = await portfolioServices.getAllByCarteira(carteira)            
            if(result.length === 0) res.status(404).send({ mensagem: "Carteira não existe"}) 
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }        
    }

    static async getOneByCarteira(req, res) {
        const {idTicker, idCarteira} = req.params 
        try {
            const result = await portfolioServices.getOneByPortfolio(idCarteira, idTicker)
            if(!result) res.status(404).send({ mensagem: "Esse Ticker não existe nessa Carteira"}) 
            res.status(200).send(result)
        } catch (error) { 
            res.status(500).send(error.message)
        }        
    }

    static async includeTickerInCarteira(req, res) {
        const {idTicker, idCarteira} = req.params 
        const {valorCusto} = req.body

        const tickerExist = await tickerServices.getOneById(idTicker)      
        if (!tickerExist) res.status(404).send({ mensagem: "Esse Ticker não existe"})        
        
        const CarteiraExist = await carteiraServices.getOneById(idCarteira)        
        if (!CarteiraExist) res.status(404).send({ mensagem: "Essa Carteira não existe"})          
        
        if (!valorCusto) res.status(404).send({ mensagem: "Faltou passar o valor de custo"}) 

        const result = await portfolioServices.getOneByPortfolio(idCarteira, idTicker) 
        if (result) res.status(401).send({ mensagem: "Esse ticker já pertence a essa carteira"})

        try {
            await portfolioServices.create({ idTicker, idCarteira, valorCusto })
            res.status(200).send({mensagem: "Ticker cadastrado com sucesso na carteira"})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async removeTickerInCarteira(req, res) {
        const {idTicker, idCarteira} = req.params       

        const tickerExist = await tickerServices.getOneById(idTicker)      
        if (!tickerExist) res.status(404).send({ mensagem: "Esse Ticker não existe"})        
        
        const CarteiraExist = await carteiraServices.getOneById(idCarteira)        
        if (!CarteiraExist) res.status(404).send({ mensagem: "Essa Carteira não existe"})          
        
        const result = await portfolioServices.getOneByPortfolio(idCarteira, idTicker)           
        if (!result) res.status(401).send({ mensagem: "Esse ticker não pertence a essa carteira"})

        try {
            await portfolioServices.destroy(result.id)
            res.status(200).send({ mensagem: "Ticker removido com sucesso da carteira"})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    
} 

module.exports = TickerController