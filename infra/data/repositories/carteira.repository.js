const data = []

const getAll = () => {
  return data;
}

const getbyID = (id) => {
  return data.find(x => x.id === id)
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
    console.log(data[pos])
    return true
  }else{ 
    return false
  } 
}

const remove = (id) => {
  const pos = data.indexOf(data.find(x => x.id === id))
  console.log(pos)
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