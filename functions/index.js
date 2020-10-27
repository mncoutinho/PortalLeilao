// Importando Dependencias
const functions = require('firebase-functions');
const firebase = require('firebase/app')
// inicializando firebase
firebase.initializeApp(functions.config().firebase);
// Inicializando banco
const db = require('firebase/firestore')
const realtime = require('firebase/database')
const storage = require('firebase/storage')

//exportando todas as configuracoes acima
module.exports = db,realtime,storage;

//instanciando as rotas

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