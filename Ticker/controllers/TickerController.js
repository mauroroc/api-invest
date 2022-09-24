const ucListaTickersPorCarteira = require('../../core/tickers/lista-tickers-carteira.usecase')

class TickerController {
    static async getOne(req, res) {
        const carteira = req.params.idCarteira
        res.status(200).json({ mensagem: ucListaTickersPorCarteira(carteira)})
    }
}

module.exports = TickerController