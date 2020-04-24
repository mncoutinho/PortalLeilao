// Importando Dependencias
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
// inicializando firebase
admin.initializeApp(functions.config().firebase);
// Inicializando Servidor Express
const app = express();
const login = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// Inicializnando banco
const db = admin.firestore().collection('user').doc();

app.get('/',( req, res) => {
    let getUsers = db.get().then(doc => {
  
            const usuario = doc.data()
            usuario.id = doc.id
            return usuario;
    });
    res.send(usuario);
});
app.post('/cadastrar',(req, res) => {
    let cadastro = req.body
    let cadastrar = db.add({cadastro}).then(ref => {
        if(doc.data.cpf.exists){
            throw new Error("CPF Já Cadastrado!")
        }
        return res.send('Usuário',cadastro.email,' cadastrado com Sucesso!');
    });
})
// Instancia da Função
const cadastro = functions.https.onRequest(app);
// Export de função por módulo
module.exports = {
    cadastro
} 
