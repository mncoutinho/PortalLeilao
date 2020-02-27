const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//carregar rotas
const indexRoutes = require('./routes/index-routes');
const productsRoutes = require('./routes/products-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/products', productsRoutes);

module.exports = app;