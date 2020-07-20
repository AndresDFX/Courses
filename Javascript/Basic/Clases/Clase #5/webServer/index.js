const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8888;

//Definicion de rutas y engine
app.use(express.static(`${__dirname}/views`));
app.use(express.static(`${__dirname}/public`));
hbs.registerPartials(__dirname + '/views/fragments');
app.set('view engine', 'hbs');

//Metodo GET de Index
app.get('/', function (req, res) {
    res.render('index/index', { title: "Index Controller" });
});

//Metodo GET de User
app.get('/user', function (req, res) {
    res.render('user/index'), { title: "User Controller" };
});

//Desarrollo de Ejercicio
app.get('/user/:user', function (req, res) {
    app.set('view engine', 'hbs');
    let username = req.params.user; 

    res.render('user/index', { title: "User Controller", username });
});

//Inicio del servidor
app.listen(port, function () {
    console.log(`El super badass web server está escuchando por el puerto ${port}`);
});
