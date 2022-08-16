const getAllCarteiras = (req,res) => {
  res.status(200).json({ mensagem: "Lista todas as carteiras"})
}

const getCarteira = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ mensagem: "Lista uma carteira " + id})
}

const addCarteira = (req, res) => {
  res.status(200).json({ mensagem: "Cadastra uma carteira"})
}

const putCarteira = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ mensagem: "Altera a carteira " + id})
}

const delCarteira = (req,res) => {
  const id = req.params.id;
  res.status(200).json({ mensagem: "Exclui a carteira " + id})
}

module.exports = {
  getAllCarteiras,
  getCarteira,
  addCarteira,
  putCarteira,
  delCarteira
}
