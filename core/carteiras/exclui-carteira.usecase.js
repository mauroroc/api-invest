const carteiraRepository = require("../../infra/data/repositories/carteira.repository");

module.exports = (id) => {    
  return carteiraRepository.remove(id)
}