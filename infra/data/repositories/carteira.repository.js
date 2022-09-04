const CarteiraEntity = require('../../../core/models/carteira.entity')

const data = [
  {
    id: "1",
    nome: "Smallcaps",
    corretora: "Nord"
  },
  {
    id: "2",
    nome: "Blue Chips",
    corretora: "XP"
  }
]

const getAll = () => {
  let resultFromDB = data
  return resultFromDB.map(item => {
    const {
      id,
      nome,
      corretora
    } = item

    return CarteiraEntity.build(
      id,
      nome,
      corretora
    )
  })
}

const getbyID = (id) => {
  let resultFromDB = data.find(x => x.id === id)
  return resultFromDB
}

const add = (dados) => {
  data.push(dados)
  return true
}

const update = (id, dados) => {
  const pos = data.indexOf(data.find(x => x.id === id))
  if(pos!=-1) {
    newDados = {
      id: id,
      ...dados
    }
    data[pos] = newDados      
    return true
  }else{ 
    return false
  } 
}

const remove = (id) => {
  const pos = data.indexOf(data.find(x => x.id === id))  
  if(pos!=-1) {
    data.splice(pos, 1)  
    return true
  }else{ 
    return false
  } 
  
}

module.exports = {
  getAll, getbyID, add, update, remove
}