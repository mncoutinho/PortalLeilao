// Importando Dependencias
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
// inicializando firebase
admin.initializeApp(functions.config().firebase);
// Inicializando Servidor Express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Inicializnando banco
const db = admin.firestore();
const item = db.collection('item');
app.get('/', (req, res) => res.send('Olá Mundo!'));
app.get('/getItems', (req, res) => {
    
    res.send(leilao.get());
});
app.post('/criarItem',(req, res) => {
    let newItem = {
        
    };
    leilao.add(newLeilao).then( response => res.send("Gravado!")
    ).catch(err);
});
// Instancia da Função
const item = functions.https.onRequest(app);
// Export de função por módulo
module.exports = {
    item
} 
