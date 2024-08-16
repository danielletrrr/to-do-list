const Task = require("../models/Task")
// controla os métodos da aplicação/ vamos separar métodos de rotas 
//vamos criar os módulos
const getAllTasks = async (req, res) => { // recebe uma aeron func que recebe req e res //p usar await tem q ser async
    try{
        const tasksList = await Task.find(); //await: espera voltar com os dados
        return res.render("index", {tasksList, task: null }); // e retorna e envia um array de tarefas pelo render
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

const getById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        const tasksList = await Task.find(); // Recupere a lista de tarefas para passar ao template

        res.render("index", { task, tasksList });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

const updateOneTask = async (req,res) => {
    try{
        const task = req.body;
        await Task.updateOne({_id: req.params.id}, task);
    res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
    
};


//exportando módulos (isso é um método da rota)
module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateOneTask,
};