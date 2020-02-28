const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
//Conecta ao Banco
mongoose.connect('mongodb+srv://admin:admin@portalleilao-kbzso.gcp.mongodb.net/test?retryWrites=true&w=majority');

//Carrega os Models
const Artigos = require('./models/artigos')
const Users = require('./models/users');
const Leilao = require('./models/leilao');
const Order = require('./models/order')

//carregar rotas
const indexRoutes = require('./routes/index-routes');
const artigoRoutes = require('./routes/artigo-routes');
const userRoutes = require('./routes/user-routes');
const leilaoRoutes = require('./routes/leilao-routes');
const orderRoutes = require('./routes/order-routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/artigo', artigoRoutes);
app.use('/leilao', leilaoRoutes);
app.use('/order', orderRoutes);
app.use('/user', userRoutes);

module.exports = app;