const { getAllTickers, addTicker, delTicker } = require("../controllers/ticker.controller");

const tickerRoutes = (app) => {

  app.get('/ticker/:idCarteira',  getAllTickers);
  app.post('/ticker', addTicker);
  app.delete('/ticker/:id', delTicker);
}  

module.exports = tickerRoutes