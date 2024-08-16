//
const routes = require("express").Router(); //routes recebe req de express (porem quero a router)
const taskController = require("../controller/TaskController")

routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask); //vai inserir dado no bd
routes.get("/getById/:id", taskController.getById);
routes.post("/updateOne/:id", taskController.updateOneTask);

module.exports = routes;