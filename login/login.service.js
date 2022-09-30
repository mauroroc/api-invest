const jwt = require("jsonwebtoken")

const keyJWT = "jaoifhfodfuisdhfouisdhfiosd"

const authMid = async (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        try {
            const payload = jwt.verify(token, keyJWT)
            if (payload.cpf) {
                return next()
            } else {
                return res.status(500).send({ mensagem: "Token inválido" })
            }
        } catch {
            return res.status(500).send(error.message)
        }
    } else {
        return res.status(401).send({ mensagem: "Não autorizado" })
    }
}

module.exports = { authMid }