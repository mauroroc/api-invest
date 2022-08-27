const express = require('express')
const carteiraRoutes = require('./routes/carteira.route')
const tickerRoutes = require('./routes/ticker.route')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
carteiraRoutes(app)
tickerRoutes(app)

const serverListener = app.listen(3000, ()=>{
  console.log("API Rodando")
})