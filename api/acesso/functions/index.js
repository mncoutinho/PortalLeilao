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
const user = db.collection('user');
app.get('/', (req, res) => res.send('Olá Mundo!'));
app.get('/getUsers', (req, res) => {
    
    res.send(user.get());
});
app.post('/criarUser',(req, res) => {
    let newUser = {
        cpf:req.body.cpf,
        name:req.body.name,
        email:req.body.email,
        access:req.body.access,
        address:req.body.address,
        phone:req.body.phone,
        class:req.body.class

    };
    user.add(newUser).then( response => res.send("Gravado!")
    ).catch(err);
});
// Instancia da Função
const login = functions.https.onRequest(app);
// Export de função por módulo
module.exports = {
    login
} 
