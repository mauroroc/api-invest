const carteiraRepository = require("../../infra/data/repositories/carteira.repository");

const Joi = require('joi')
const schema = Joi.object({
  id: Joi.string()
        .alphanum()
        .min(1)
        .required(),
  nome: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
  corretora: Joi.string()        
        .min(3)
        .max(30)
        .required()
})

module.exports = async (dados) => {  
  try{
    const carteira = await schema.validateAsync(dados)
    console.log(carteira)
    return carteiraRepository.add(carteira)    
  }catch(err){    
    return false
  }  
}