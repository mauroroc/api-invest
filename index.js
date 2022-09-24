const express = require('express')
const carteiraRoutes = require('./Carteira/routes/carteira.route')
const tickerRoutes = require('./Ticker/routes/ticker.route')
const cors = require('cors')
const PORT = 3000
const app = express()
app.use(express.json())
app.use(cors())
carteiraRoutes(app)
tickerRoutes(app)

const serverListener = app.listen(PORT, ()=>{
  console.log("API Rodando... Porta: " + PORT)
})