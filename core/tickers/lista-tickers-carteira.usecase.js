const tickerRepository = require("../../infra/data/repositories/ticker.repository");

module.exports = (carteira) => {  
  return tickerRepository.getAll(carteira)
}