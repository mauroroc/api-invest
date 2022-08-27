const carteiraRepository = require("../../infra/data/repositories/carteira.repository");

const Joi = require('joi')
const schema = Joi.object({
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

module.exports = async (id, dados) => {   
  try{
    const carteira = await schema.validateAsync(dados)       
    return carteiraRepository.update(id, dados)
  }catch(err){
    return false
  } 
  
}