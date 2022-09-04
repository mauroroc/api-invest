const tickerRepository = require("../../infra/data/repositories/ticker.repository");

const Joi = require('joi')
const schema = Joi.object({
    id: Joi.string()
          .alphanum()
          .min(1)
          .required(),
    idCarteira: Joi.string()
          .alphanum()
          .min(1)
          .required(),     
    codigo: Joi.string()
          .alphanum()
          .min(5)
          .max(6)
          .required(),
    valorCusto: Joi.number() 
          .positive()    
          .required()
  })

module.exports = async (dados) => {  
  try{
    const ticker = await schema.validateAsync(dados)    
    return tickerRepository.add(ticker)    
  }catch(err){    
    return false
  }  
}

