const database = require("../../../dbConfig/db/models");
const ucListaTickersPorCarteira = require('../../../core/tickers/lista-tickers-carteira.usecase')

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
                res.status(404).send("Esse registro não existe")
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async addTicker(req, res) {
        const newTicker = req.body        
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
                res.status(404).send("Esse registro não existe")
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
                res.status(200).send("Registro deletado com sucesso!")
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send("Esse registro não existe")
        }
    }

    static async getOneByCarteira(req, res) {
        const carteira = req.params.idCarteira
        res.status(200).json({ mensagem: ucListaTickersPorCarteira(carteira)})
    }
    static testExemplo() {
        return("Teste")
    }
}

    

module.exports = TickerController