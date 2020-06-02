// Importando Dependencias
const functions = require('firebase-functions');
const admin = require('firebase-admin');
// inicializando firebase
admin.initializeApp(functions.config().firebase);
// Inicializando banco
const db = admin.firestore();
//exportando todas as configuracoes acima
module.exports = db;
//instanciando as rotas
const loginApp = require('./routes/login');
const leilaoApp = require('./routes/leilao');
const itemApp = require('./routes/item');
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