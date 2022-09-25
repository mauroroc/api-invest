//const { getAllTickers, addTicker, delTicker } = require("../controllers/ticker.controller");
const TickerController = require("../controllers/TickerController");
const tickerController = require("../controllers/TickerController")

const tickerRoutes = (app) => {

  app.get('/ticker',  tickerController.getAll)
  app.get('/ticker/:id',  tickerController.getOne)
  app.post('/ticker', tickerController.addTicker);
  app.put('/ticker/:id', tickerController.editTicker)
  app.delete('/ticker/:id', TickerController.delTicker)
  //app.get('/ticker/:idCarteira',  tickerController.getOne)  
  //app.delete('/ticker/:id', delTicker);
}  

module.exports = tickerRoutes