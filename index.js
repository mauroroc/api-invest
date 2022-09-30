const express = require('express')
const loginRoutes = require("./login/login.route")
const cors = require('cors')
const PORT = 3000
const app = express()
app.use(express.json())
app.use(cors())
loginRoutes(app)

const serverListener = app.listen(PORT, ()=>{
  console.log("API Rodando... Porta: " + PORT)
})