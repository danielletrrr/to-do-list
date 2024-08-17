const routes = require("express").Router();
const taskController = require("../controller/TaskController");

routes.get("/", taskController.getAllTasks);
routes.post("/create", taskController.createTask);
routes.get("/getById/:id", taskController.getById);
routes.get("/confirmDelete/:id", taskController.confirmDelete);
routes.post("/deleteOne/:id", taskController.deleteOneTask);
routes.post("/updateOne/:id", taskController.updateOneTask);

module.exports = routes;
