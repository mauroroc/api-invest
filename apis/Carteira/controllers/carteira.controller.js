const ucListaTodasCarteiras = require('../../../core/carteiras/lista-carteiras.usecase')
const ucListaCarteiraByID = require('../../../core/carteiras/lista-carteira-id.usecase')
const ucCadastraCarteira = require('../../../core/carteiras/cadastra-carteira.usecase')
const ucAlteraCarteira = require('../../../core/carteiras/altera-carteira.usecase')
const ucExcluiCarteira = require('../../../core/carteiras/exclui-carteira.usecase')

const getAllCarteiras = (req,res) => {  
  res.status(200).json({ mensagem: ucListaTodasCarteiras()})
}

const getCarteira = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ mensagem: ucListaCarteiraByID(id)})
}

const addCarteira = async (req, res) => {
  const dados = req.body;  
  if(await ucCadastraCarteira(dados))
    res.status(200).json({ mensagem: "Registro incluido com sucesso."})
  else
    res.status(400).json({ mensagem: "Erro no envio dos dados da consulta"})
}

const putCarteira = async (req, res) => {
  const id = req.params.id;
  const dados = req.body;  
  if(await ucAlteraCarteira(id, dados))
    res.status(200).json({ mensagem: "Registro alterado com sucesso."})
  else
    res.status(400).json({ mensagem: "Erro no envio dos dados da consulta"})
  
}

const delCarteira = (req,res) => {
  const id = req.params.id;
  if(ucExcluiCarteira(id))
    res.status(200).json({ mensagem: "Registro exclúido com sucesso."})
  else
    res.status(400).json({ mensagem: "Registro não existe."})
}

module.exports = {
  getAllCarteiras,
  getCarteira,
  addCarteira,
  putCarteira,
  delCarteira
}
