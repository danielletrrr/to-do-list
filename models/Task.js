const mongoose = require("mongoose");
//collection ou tabela no sql
const taskSchema = new mongoose.Schema({ //cria objeto
    task: { //cria objeto
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        require: true,
    },
    date: { //pega data atual do servidor que está, que foi criado
        type: Date,
        default: Date.now(), 
    },
}); 

module.exports = mongoose.model("Task", taskSchema); //em parenteses, como sera chamado