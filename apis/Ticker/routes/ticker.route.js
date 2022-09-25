//const { getAllTickers, addTicker, delTicker } = require("../controllers/ticker.controller");
const tickerController = require("../controllers/TickerController")

const tickerRoutes = (app) => {

  app.get('/ticker',  tickerController.getAll)
  app.get('/ticker/:id',  tickerController.getOne)
  app.post('/ticker', tickerController.addTicker);
  app.put('/ticker/:id', tickerController.editTicker)
  app.delete('/ticker/:id', tickerController.delTicker)
  app.get('/ticker/carteira/:idCarteira',  tickerController.getAllByCarteira) 
  app.get('/ticker/:idTicker/carteira/:idCarteira',  tickerController.getOneByCarteira) 
  app.post('/ticker/:idTicker/carteira/:idCarteira', tickerController.includeTickerInCarteira)
}  

module.exports = tickerRoutes