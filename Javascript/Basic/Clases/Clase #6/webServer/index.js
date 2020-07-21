const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8888;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/views`));
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');

app.use(require('./routes/index'));

app.listen(port, function () {
    console.log(`El super badass web server está escuchando por el puerto ${port}`);
});