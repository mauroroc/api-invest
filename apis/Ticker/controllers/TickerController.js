const database = require("../../../dbConfig/db/models");
var validator = require('validator')

class TickerController {

    static async getAll(req,res) {
        try {
            const result = await database.Tickers.findAll()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async getOne(req,res) {
        const { id } = req.params
        try {
            const result = await database.Tickers.findOne({
                where: {
                    id: Number(id)
                }
            })
            if (result) 
                res.status(200).send(result)
            else    
                res.status(404).send({ mensagem: "Esse registro não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async addTicker(req, res) {
        const newTicker = req.body  
        
        const isCode = validator.isLength(newTicker.codigo, {min:5,max:7})
        if(!isCode) throw new CodigoInvalido()
        
        const isPrice = validator.isFloat(newTicker.valorCotacao, {min: 0.01, max: 9999.99})
        if(!isPrice) throw new ValorCotacaoInvalido()
        
        const codeExist = await database.Tickers.findOne({
            where: { codigo: newTicker.codigo }
        })        
        if (codeExist) {
            res.status(200).send("Ticker já cadastrado")
        } else {
            try {
                const result = await database.Tickers.create(newTicker)
                res.status(200).send(result)
            } catch (error) {
                res.status(500).send(error.message)
            }
        }
    }

    static async editTicker(req, res) {
        const { id } = req.params
        const updateTicker = req.body 
        
        const isCode = updateTicker.codigo.length() > 4 || updateTicker.codigo.length() < 7 ? true : false
        if(!isCode) throw new CodigoInvalido()
        
        const isPrice = Number(updateTicker.valorCotacao) > 0.01 ? true : false
        if(!isPrice) throw new ValorCotacaoInvalido()

        try {
            const result = await database.Tickers.findOne({
                where: { id: Number(id) }
            })            
            if (result) {
                console.log(updateTicker)
                await database.Tickers.update(updateTicker, 
                    { where: { id: Number(id) } })
                res.status(200).send(updateTicker)
            }
            else    
                res.status(404).send({ mensagem: "Esse registro não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }

    }

    static async delTicker(req, res) {
        const { id } = req.params       
        const codeExist = await database.Tickers.findOne({
            where: {  id: Number(id)  }
        })        
        if (codeExist) {
            try {
                await database.Tickers.destroy({
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

    static async restoreTicker(req, res) {
        const { id } = req.params       
        const codeExist = await database.Tickers.findOne({
            where: {  id: Number(id)  }
        })        
        if (!codeExist) {
            try {
                await database.Tickers.restore({
                    where: { id: Number(id) }
                })
                res.status(200).send({ mensagem: "Registro recuperado com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Esse registro não precisa ser restaurado"}) 
        }
    }

    static async getAllByCarteira(req, res) {
        const carteira = req.params.idCarteira
        try {
            const result = await database.Portfolios.findAll({
                where: { idCarteira: carteira }
            })            
            if(result.length === 0) res.status(404).send({ mensagem: "Carteira não existe"}) 
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }        
    }

    static async getOneByCarteira(req, res) {
        const {idTicker, idCarteira} = req.params 
        try {
            const result = await database.Portfolios.findOne({
                where: { idCarteira: idCarteira, idTicker: idTicker }
            })            
            if(!result) res.status(404).send({ mensagem: "Esse Ticker não existe nessa Carteira"}) 
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }        
    }

    static async includeTickerInCarteira(req, res) {
        const {idTicker, idCarteira} = req.params 
        const {valorCusto} = req.body

        const tickerExist = await database.Tickers.findOne({
            where: { id: idTicker }
        })      
        
        if (!tickerExist) res.status(404).send({ mensagem: "Esse Ticker não existe"})        
        const CarteiraExist = await database.Carteiras.findOne({
            where: { id: idCarteira }
        })        
        
        if (!CarteiraExist) res.status(404).send({ mensagem: "Essa Carteira não existe"})          
        
        if (!valorCusto) res.status(404).send({ mensagem: "Faltou passar o valor de custo"}) 

        const result = await database.Portfolios.findOne({
            where: { idCarteira: idCarteira, idTicker: idTicker }
        })            
        if (result) res.status(401).send({ mensagem: "Esse ticker já pertence a essa carteira"})

        try {
            const result = await database.Portfolios.create({ idTicker, idCarteira, valorCusto })
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async removeTickerInCarteira(req, res) {
        const {idTicker, idCarteira} = req.params       

        const tickerExist = await database.Tickers.findOne({
            where: { id: idTicker }
        })      
        
        if (!tickerExist) res.status(404).send({ mensagem: "Esse Ticker não existe"})        
        const CarteiraExist = await database.Carteiras.findOne({
            where: { id: idCarteira }
        })        
        
        if (!CarteiraExist) res.status(404).send({ mensagem: "Essa Carteira não existe"})          
        
        const result = await database.Portfolios.findOne({
            where: { idCarteira: idCarteira, idTicker: idTicker }
        })            
        if (!result) res.status(401).send({ mensagem: "Esse ticker não pertence a essa carteira"})

        try {
            await database.Portfolios.destroy({ where:{ id: result.id } })
            res.status(200).send({ mensagem: "Ticker removido com sucesso da carteira"})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static testExemplo() {
        return("Teste")
    }
} 

module.exports = TickerController