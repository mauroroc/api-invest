const { getAllTickers, getTicker, addTicker, putTicker, delTicker } = require("../controllers/ticker.controller");

const tickerRoutes = (app) => {

  app.get('/ticker',  getAllTickers);
  app.get('/ticker/:id',  getTicker);
  app.post('/ticker', addTicker);
  app.put('/ticker/:id', putTicker);
  app.delete('/ticker/:id', delTicker);
}  

module.exports = tickerRoutes