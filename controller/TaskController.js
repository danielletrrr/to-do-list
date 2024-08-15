// controla os métodos da aplicação/ vamos separar métodos de rotas 
//vamos criar os módulos
const getAll = (req, res) => { // recebe uma aeron func que recebe req e res
    return res.render("index"); // e retorna 
};
//exportando módulos (isso é um método da rota)
module.exports = {
    getAll,
}