const jwt = require("jsonwebtoken")
//const bcrypt = require("bcrypt")
const ModelService = require("../apis/model.service")
const userServices = new ModelService("Users")
const carteiraRoutes = require('../apis/Carteira/routes/carteira.route')
const tickerRoutes = require('../apis/Ticker/routes/ticker.route')
const userRoutes = require("../apis/Users/routes/user.route")
const { authMid } = require("./login.service")

const keyJWT = "jaoifhfodfuisdhfouisdhfiosd"

module.exports = (app) => {
    app.use(authMid)    
    app.post("/login", async (req, res) => {
        const { cpf, senha } = req.body
        try {
            const user = await userServices.getOneByCpf(cpf)
            if (user) {
                if (user.senha === senha) {
                    const payload = {
                        cpf: cpf,
                        nome: user.nome,
                        email: user.email
                    }
                    const token = jwt.sign(payload, keyJWT, { expiresIn: "24h" })
                    res.set("Authorization", token)
                    res.status(204).send()
                }
            }
        } catch (error) {
            return res.status(500).send(error.message)
        }
    })    

    carteiraRoutes(app)
    tickerRoutes(app)
    userRoutes(app)
}