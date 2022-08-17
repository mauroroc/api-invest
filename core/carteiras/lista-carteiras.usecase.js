const carteiraRepository = require("../../infra/data/repositories/carteira.repository");

module.exports = () => {  
  return carteiraRepository.getAll()
}