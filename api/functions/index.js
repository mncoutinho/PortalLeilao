// Acesso
// Importando Dependencias
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// inicializando firebase
admin.initializeApp(functions.config().firebase);
// Inicializando Servidor Express
const loginApp = express();

loginApp.use(bodyParser.json());
loginApp.use(bodyParser.urlencoded({extended:false}));
loginApp.use(cors({origin:true}))
// Inicializnando banco
const db = admin.firestore();
const user = db.collection('user');
loginApp.get('/', (req, res) => res.status(200).send('Olá Mundo!'));
loginApp.get('/getUsers',(req, res) => {
    res.status(200).send('Deveria Enviar a POrra de uma lista que nao aguento mais');
    });
loginApp.post('/criarUser',(req, res) => {
    let newUser = {
        cpf:req.body.cpf,
        name:req.body.name,
        email:req.body.email,
        access:req.body.access,
        address:req.body.address,
        phone:req.body.phone,
        class:req.body.class

    };
    user.add(newUser).then((documentRef) => {
        return res.send(`Usuario adicionado com id ${documentRef.path} e dados ${JSON.stringify(newUser)}`);
    }).catch(err => res.send(err));
});
// Item
const itemApp = express();

itemApp.use(bodyParser.json());
itemApp.use(bodyParser.urlencoded({extended:false}));

const items = db.collection('item');
itemApp.get('/', (req, res) => res.send('Olá Mundo!'));
itemApp.get('/getItems', (req, res) => {
    
    res.send(items.get());
});
itemApp.post('/criarItem',(req, res) => {
    let newItem = {
        
    };
    items.add(newitem).then( response => res.send("Gravado!")
    ).catch(err);
});
// Leilão
const leilaoApp = express();

leilaoApp.use(bodyParser.json());
leilaoApp.use(bodyParser.urlencoded({extended:false}));

const leiloes = db.collection('leilao');
leilaoApp.get('/', (req, res) => res.send('Olá Mundo!'));
leilaoApp.get('/getleiloes', (req, res) => {
    
    res.send(leiloes.get());
});
leilaoApp.post('/criarLeilao',(req, res) => {
    let newLeilao = {
        
    };
    leiloes.add(newLeilao).then( response => res.send("Gravado!")
    ).catch(err);
});
// Instancia da Função
const item = functions.https.onRequest(itemApp);
const login = functions.https.onRequest(loginApp);
const leilao = functions.https.onRequest(leilaoApp);
// Export de função por módulo
module.exports = {
    login,
    item,
    leilao
} 
