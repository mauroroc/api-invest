const ucListaTickersPorCarteira = require('../core/tickers/lista-tickers-carteira.usecase')
const ucCadastraTicker = require('../core/tickers/cadastra-ticker-carteira.usecase')
const ucExcluiTicker = require('../core/tickers/exclui-ticker-carteira.usecase')

const getAllTickers = (req,res) => {
  const carteira = req.params.idCarteira
  res.status(200).json({ mensagem: ucListaTickersPorCarteira(carteira)})
}

const addTicker = async (req, res) => {
  const dados = req.body;  
  if(await ucCadastraTicker(dados))
    res.status(200).json({ mensagem: "Ticker incluido com sucesso na carteira."})
  else
    res.status(400).json({ mensagem: "Erro no envio dos dados da consulta"})  
}

const delTicker = (req,res) => {
  const id = req.params.id;
  if(ucExcluiTicker(id))
    res.status(200).json({ mensagem: "Registro exclúido com sucesso."})
  else
    res.status(400).json({ mensagem: "Registro não existe."})
}

module.exports = {
  getAllTickers,
  addTicker,
  delTicker
}