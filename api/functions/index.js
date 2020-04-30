// Acesso
// Importando Dependencias
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
// const credential = require('/home/aguia/Documents/firebase/portalleilao-26290-firebase-adminsdk-c5ywf-b4f15e6777.json');

// inicializando firebase
admin.initializeApp(functions.config().firebase);
// Inicializando Servidor Express
const loginApp = express();

loginApp.use(bodyParser.json());
loginApp.use(bodyParser.urlencoded({extended:false}));

// Inicializnando banco
const db = admin.firestore();
const user = db.collection('user');
loginApp.get('/', (req, res) => res.send('Olá Mundo!'));
loginApp.get('/getUsers', async (req, res) => {
    try {
        let query = await user.get().then(snapshot => {
            let users = [];
            snapshot.forEach(doc => {
               users.push({ 
                access: doc.data().access,
                accountClass: doc.data().accountClass,
                address: doc.data().address,
                cpf:doc.data().cpf,
                email: doc.data().email,
                name:doc.data().name,
                phone:doc.data().phone
                });
            })
            return users
        })
        res.status(200).send(query);
    }
    catch(err){
        res.status(400).send(err.message);
    }
});
loginApp.post('/criarUser',async (req, res) => {
    try{
        let newUser = {
            cpf:req.body.cpf,
            name:req.body.name,
            email:req.body.email,
            access:req.body.access,
            address:req.body.address,
            phone:req.body.phone,
            accountClass:req.body.accountClass,
            password:req.body.password
            
        };
        let query = await user.add(newUser)
        res.status(200).send(`Gravado!${JSON.stringify(req.body)}`)

    }
    catch(err) {
        res.status(400).send(err.message);
    
    }
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
