const TickerEntity = require('../../../core/models/ticker.entity')

const data = [
  {
    id: "1",
    idCarteira: "1",
    codigo: "PRIO3",
    valorCusto: 25    
  },
  {
    id: "2",
    idCarteira: "1",
    codigo: "TASA4",
    valorCusto: 20 
  },
  {
    id: "3",
    idCarteira: "2",
    codigo: "PETR4",
    valorCusto: 30   
  },
  {
    id: "4",
    idCarteira: "2",
    codigo: "VALE3",
    valorCusto: 70 
  }
]

const getAll = (carteira) => {
  let resultFromDB = data

  if (carteira) {
    console.log('Carteira' + carteira)
    resultFromDB = data.filter(item => item.idCarteira == carteira)
  }

  return resultFromDB.map(item => {
    const {
        id,
        idCarteira,
        codigo,
        valorCusto
    } = item

    return TickerEntity.build(
        id,
        idCarteira,
        codigo,
        valorCusto
    )
  })
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
  getAll, add, update, remove
}