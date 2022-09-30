const ModelService = require("../../model.service")
const userServices = new ModelService("Users")
//var validator = require('validator')

class UserController {

    static async getOne(req,res) {
        const { cpf } = req.params
        try {
            const result = await userServices.getOneByCpf(cpf)
            if (result) 
                res.status(200).send(result)
            else    
                res.status(404).send({ mensagem: "Esse Usuário não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    static async addUser(req, res) {
        const newUser = req.body  
        
        //const isCode = validator.isLength(newTicker.codigo, {min:5,max:7})
        //if(!isCode) res.status(401).send("Codigo precisa ter entre 5 e 7 caracteres")        
        
        const userExist = await userServices.getOneByCpf(newUser.cpf)        
        if (userExist) {
            res.status(200).send("Usuário já cadastrado")
        } else {
            try {
                const result = await userServices.create(newUser)
                res.status(200).send(result)
            } catch (error) {
                res.status(500).send(error.message)
            }
        }
    }

    static async editUser(req, res) {
        const { cpf } = req.params
        const updateUser = req.body 
              
        try {
            const result = await userServices.getOneByCpf(cpf)            
            if (result) {                
                await userServices.edit(updateUser, cpf)
                res.status(200).send({ mensagem: "Usuário alterado" })
            }
            else    
                res.status(404).send({ mensagem: "Esse Usuário não existe"})
        } catch (error) {
            res.status(500).send(error.message)
        }

    }

    static async delUser(req, res) {
        const { cpf } = req.params       
        const result = await userServices.getOneByCpf(cpf)
        if (result) {
            try {
                await userServices.destroy(cpf)
                res.status(200).send({ mensagem: "Usuário deletado com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Esse Usuário não existe"}) 
        }
    }

    static async restoreUser(req, res) {
        const { cpf } = req.params       
        const result = await userServices.getOneByCpf(cpf)       
        if (!result) {
            try {
                await userServices.restore(cpf)
                res.status(200).send({ mensagem: "Usuário recuperado com sucesso!"})
            } catch (error) {
                res.status(500).send(error.message)
            }
        } else {
            res.status(404).send({ mensagem: "Esse Usuário não precisa ser restaurado"}) 
        }
    }

} 

module.exports = UserController