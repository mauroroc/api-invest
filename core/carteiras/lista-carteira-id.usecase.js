const carteiraRepository = require("../../infra/data/repositories/carteira.repository");

module.exports = (id) => {  
  return carteiraRepository.getbyID(id)
}