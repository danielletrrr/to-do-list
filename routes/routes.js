//
const routes = require("express").Router(); //routes recebe req de express (porem quero a router)
const taskController = require("../controller/TaskController")

routes.get("/", taskController.getAll)

module.exports = routes