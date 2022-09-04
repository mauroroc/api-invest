const tickerRepository = require("../../infra/data/repositories/ticker.repository");

module.exports = (id) => {    
  return tickerRepository.remove(id)
}