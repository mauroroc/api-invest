const { getAllCarteiras, getCarteira, addCarteira, putCarteira, delCarteira } = require("../controllers/carteira.controller");

const carteiraRoutes = (app) => {

  app.get('/carteira',  getAllCarteiras);
  app.get('/carteira/:id',  getCarteira);
  app.post('/carteira', addCarteira);
  app.put('/carteira/:id', putCarteira);
  app.delete('/carteira/:id', delCarteira);
}  

module.exports = carteiraRoutes

