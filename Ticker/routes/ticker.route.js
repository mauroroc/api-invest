//const { getAllTickers, addTicker, delTicker } = require("../controllers/ticker.controller");
const tickerController = require("../controllers/TickerController")

const tickerRoutes = (app) => {

  app.get('/ticker/:idCarteira',  tickerController.getOne)
  //app.post('/ticker', addTicker);
  //app.delete('/ticker/:id', delTicker);
}  

module.exports = tickerRoutes