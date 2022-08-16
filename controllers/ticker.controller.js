const getAllTickers = (req,res) => {
  res.status(200).json({ mensagem: "Lista todas as Tickers"})
}

const getTicker = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ mensagem: "Lista uma Ticker " + id})
}

const addTicker = (req, res) => {
  res.status(200).json({ mensagem: "Cadastra uma Ticker"})
}

const putTicker = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ mensagem: "Altera a Ticker " + id})
}

const delTicker = (req,res) => {
  const id = req.params.id;
  res.status(200).json({ mensagem: "Exclui a Ticker " + id})
}

module.exports = {
  getAllTickers,
  getTicker,
  addTicker,
  putTicker,
  delTicker
}