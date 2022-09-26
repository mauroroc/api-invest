const carteiraController = require("../controllers/CarteiraController")

const carteiraRoutes = (app) => {

  app.get('/carteira',  carteiraController.getAll);
  app.get('/carteira/:id',  carteiraController.getOne);
  app.post('/carteira', carteiraController.addCarteira);
  app.put('/carteira/:id', carteiraController.editCarteira);
  app.delete('/carteira/:id', carteiraController.delCarteira);
}  

module.exports = carteiraRoutes

