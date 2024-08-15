/*
const express = require('express') //está requisitando o express
const app = express() //express é uma função e tá sendo executada dentro de app
const port = 3000;

// ROTA
app.get('/home', (req, res) => { //a primeira função que ele executa é get tem dois parametros (o nome) e a (req e resposta) -- tem aeron function mas não precisa de {}
  res.send('Hello World'); //responde o hello word
}); res send envia arquivos html/json simples ou qqr outro tipo de dado

app.listen(port, ()=>  //criando função de call back aeron function que recebe o console.log 
    console.log(`Servidor rodando em http://localhost:${port}`) // está entre crase para concatenar a porta (criou´se uma const chamada port que recebe 3000, para não colocar o 3000 no cod)
);
*/

// depois que criei a estrutura das pastas 

const express = require('express') //está requisitando o express
const path = require("path"); //direciona as pastas (ler o css)
const routes = require("./routes/routes") //

const app = express() //express é uma função e tá sendo executada dentro de app
const port = 3000;


app.set("view engine", "ejs"); //em um aplicativo Express.js define o motor de template que será usado para renderizar as views (páginas HTML dinâmicas)
app.use(express.static(path.join(__dirname, "public"))); //onde estarão aquivos estáticos (criou após criar a const path)
app.use(routes);

/* apagando este pois foi criado um app.use routes  e const require routes 
// ROTA qdo entro na rota executa um método por isso criou modulo no task controller
app.get('/', (req, res) => { //a primeira função que ele executa é get tem dois parametros (o nome) e a (req e resposta) -- tem aeron function mas não precisa de {}
  res.render('index'); //res render renderiza arquivos ejs, pg e hbs la em cima cria um app.set com o módulo ejs (precisa instalar no terminal)
});
*/

app.listen(port, ()=>  //criando função de call back aeron function que recebe o console.log 
    console.log(`Servidor rodando em http://localhost:${port}`) // está entre crase para concatenar a porta (criou´se uma const chamada port que recebe 3000, para não colocar o 3000 no cod)
);

