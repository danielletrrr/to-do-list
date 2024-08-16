//baixa mongoose
//cria a função
//adiciona no index js depois

const mongoose = require('mongoose'); 

const connectToDb = () => { //aeron function
    mongoose.connect( //esta usando a biblioteca conect do mongoose
        "mongodb+srv://danielletrajano16:lvnF7iO7BFNQJojQ@cluster0.64fvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
    

};

//exportando a função acima como virou um modulo, exporto ele em qqr lugas
module.exports = connectToDb; 