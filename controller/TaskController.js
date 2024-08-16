const Task = require("../models/Task")
// controla os métodos da aplicação/ vamos separar métodos de rotas 
//vamos criar os módulos
const getAllTasks = async (req, res) => { // recebe uma aeron func que recebe req e res //p usar await tem q ser async
    try{
        const tasksList = await Task.find(); //await: espera voltar com os dados
        return res.render("index", {tasks: tasksList}); // e retorna e envia um array de tarefas pelo render
    }   catch (err){
        res.status(500).send({error: err.message});
    }
    
};


const createTask = async (req, res) => {
    const task = req.body;

    if(!task) { //verifica se exite algo
        return res.redirect("/") // se não tiver, recarrega
    }

    try{ //tente cadastrar o obj no bd
        await Task.create(task);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message})
    }
};
//exportando módulos (isso é um método da rota)
module.exports = {
    getAllTasks,
    createTask 
}