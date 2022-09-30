const userController = require("../controllers/UserController")

const userRoutes = (app) => {

  app.get('/user/:cpf',  userController.getOne)
  app.post('/user', userController.addUser);
  app.put('/user/:id', userController.editUser)
  app.delete('/user/:id', userController.delUser)
  app.post('/user/:id', userController.restoreUser)
}  

module.exports = userRoutes