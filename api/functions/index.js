// Importando Dependencias
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// inicializando firebase
admin.initializeApp(functions.config().firebase);

// Iniciando Storage
const storage = admin.storage();

// Inicializando banco
const db = admin.firestore();
const user = db.collection('user');

// Acesso
// Inicializando Servidor Express
const loginApp = express();
loginApp.use(bodyParser.json());
loginApp.use(bodyParser.urlencoded({extended:false}));
loginApp.use(cors({origin:true}))

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
loginApp.post('/createUser',async (req, res) => {
    try{
        let newPerfil = {
            cpf:req.body.cpf,
            name:req.body.name,
            email:req.body.email,
            access:req.body.access,
            address:req.body.address,
            phone:req.body.phone,
            accountClass:req.body.accountClass,
            password:req.body.password
            
        };
        let query = await user.add(newPerfil)
        res.status(200).send(`Gravado!${JSON.stringify(req.body)}`)

    }
    catch(err) {
        res.status(400).send(err.message);
    
    }
});
//update
loginApp.put('/updateUser', async (req, res)=> {
    try{
        let id = req.body.id;
        let perfil = {
            cpf:req.body.cpf,
            name:req.body.name,
            email:req.body.email,
            access:req.body.access,
            address:req.body.address,
            phone:req.body.phone,
            accountClass:req.body.accountClass,
            password:req.body.password
            
        };
        let query = await user.doc(id).update(perfil);
        res.status(200).send(`Atualizado com sucesso! ${JSON.stringify(query)}`)
    }catch(err){
        res.status(400).send(err.message);
    }
});
//delete 
loginApp.delete('/deleteUser', async (req,res) =>{
    try{
        let id = req.body.id;
        await user.doc(id).delete();
        res.status(200).send('deletado com sucesso');
    }
    catch(err){
        res.status(400).send(err.message);
    }
});

// Item
const itemApp = express();
itemApp.use(bodyParser.json());
itemApp.use(bodyParser.urlencoded({extended:false}));
itemApp.use(cors({origin:true}));
const items = db.collection('item');
itemApp.get('/', (req, res) => res.send('Olá Mundo!'));
//categoria
itemApp.get('/category', async (req, res) => {
try{
    let getCategory = await items.doc('category').get().then(doc => {
        let category = [];
        category.push(category = doc.data().category);
        return category
    });
    res.status(200).send(getCategory);
}
catch(err){
    res.status(400).send(err.message)
}
});
itemApp.post('/getItemById', async (req, res) => {
    try{
        let id = req.body.id;
        let item = "";
        let query = await items.doc(id)
        .get()
        .then(doc => {
             item = doc.data()
            return res.status(200).send(`${JSON.stringify(item)}`)
        })
    }
    catch(err){
        res.status(400).send(err.message);
    }
});

itemApp.get('/getAllItem', async (req, res) => {
    try{
        let query = await items.orderBy('name').get().then(snapshot =>{
            let article = [];
            snapshot.forEach(doc =>{
                article.push({
                    name: doc.data().name,
                    valor: doc.data().initialbid,
                    id: doc.id
                });
            })
            return article
        })
        res.status(200).send(query);
    }
    catch(err){
        res.status(400).send(err.message);
    }
});

itemApp.get('/searchItem', async (req, res) => {
    try{
        let filter = "";
        let composite = true;


        if(composite){
            filter =  items.where('initialbid',">",500).where('initialbid',"<",1000);
        }else{
            filter =  items.where('initialbid',">",500);
        }
       
        let query = await filter.get().then(snapshot =>{
            let article = [];
            snapshot.forEach(doc =>{
                article.push({
                    name: doc.data().name,
                    valor: doc.data().initialbid,
                    id: doc.id
                });
            })
            return article
        })
        res.status(200).send(query);
    }
    catch(err){
        res.status(400).send(err.message);
    }
});

itemApp.post('/uploadImage', async (req,res) => {
    try{
        let bucket = storage.bucket('items/');
        await bucket.upload(req.data.image,{
            gzip:true
        })
    }
    catch(err){
        res.status(400).send(err.message);
    }
});
//criacao de item
itemApp.post('/createItem', async (req, res) => {
    try{
        let newItem = {
                active:true,
                category:req.body.category,
                date:req.body.date,
                description:req.body.description,
                imgUrl:req.body.imgUrl,
                initialBid:req.body.initialBid,
                link:req.body.link,
                name:req.body.name,                
        };
        let query = await items.add(newItem);
        res.status(200).send(`${req.body.name} gravado com Sucesso!`);
    }
    catch(err) {
        res.status(400).send(err.message);
    
    }
});

//update Item
itemApp.put('/updateItem', async (req, res) => {
    try{
        let id = req.body.id;
        let Item = {
            active:req.body.active,
            category:req.body.category,
            date:req.body.date,
            description:req.body.description,
            imgUrl:req.body.imgUrl,
            initialBid:req.body.initialBid,
            link:req.body.link,
            name:req.body.name,     
        };
        let query = await items.doc(id).update(Item);
        res.status(200).send(`${JSON.stringify(req.body)} atualizados com sucesso`);
    }
    catch(err) {
        res.status(400).send(err.message);
    }
});
//delete item
itemApp.delete('/deleteItem', async (req, res) =>{
    try{
        let id = req.body.id;
        await items.doc(id).delete();
        res.status(200).send(`Item com o id ${JSON.stringify(req.body.id)} apagado com Sucesso`);
    }
    catch(err){
        res.status(400).send(err.message);
    }
});

// Leilão
const leilaoApp = express();
leilaoApp.use(bodyParser.json());
leilaoApp.use(bodyParser.urlencoded({extended:false}));
leilaoApp.use(cors({origin:true}));
const leiloes = db.collection('leilao');
leilaoApp.get('/', (req, res) => res.send('Olá Mundo!'));

//a apagar
leilaoApp.get('/getleiloes', async (req, res) => {
    try {
        let query = await leiloes.get().then(snapshot => {
            let users = [];
            snapshot.forEach(doc => {
               users.push({ 
                items: doc.data().items,
                iduser: doc.data().iduser,    
                name:doc.data().name,
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
//puxando pelo Id
leilaoApp.post('/getBidById', async (req, res) => {
    try {
            let id = req.body.id;
            let query = await leiloes.doc(id).get().then(doc => {
            bid = doc.data()
            return res.status(200).send(`${JSON.stringify(bid)}`)
       });
    }
    catch(err){
        res.status(400).send(err.message);
    }
});
//puxando td do banco
leilaoApp.get('/getAllBid', async (req,res) => {
    try{
        let query = await leiloes.get().then(snapshot =>{
            let bids = [];
            snapshot.forEach(doc => {
                bids.push({
                    name: doc.data().name,
                    description: doc.data().description,
                    items: doc.data().items,
                    startsOn: doc.data().startsOn,
                    closedAt: doc.data().closedAt
                });
            })
            return bids
        })
        res.status(200).send(query);
    }catch(err){
        res.status(400).send(err.message);
    }
});

//criando leilao
leilaoApp.post('/createBid', async (req,res) =>{
    try{
        let newBid = {
            name: req.body.name,
            description: req.body.description,
            items: req.body.items,
            startsOn: req.body.startsOn,
            closedAt: req.body.closedAt
        }
        let query = await leiloes.add(newBid);
        res.status(200).send(`${req.body.name} gravado com Sucesso!`);
    }
    catch(err){
        res.status(400).send(err.message);
    }
});
//update leilao
leilaoApp.put('/updateBid', async (req, res) => {
    try{
        let id = req.body.id;
        let bid = {
            name: req.body.name,
            description: req.body.description,
            items: req.body.items,
            startsOn: req.body.startsOn,
            closedAt: req.body.closedAt
        };
        let query = await leiloes.doc(id).update(bid);
        res.status(200).send(`${req.body.name} atualizado com Sucesso!`);
    }
    catch(err){
        res.status(400).send(err.message);
    }
});
//delete
leilaoApp.delete('/deleteBid', async (req, res) =>{
    try{
        let id = req.body.id;
        let query = await leiloes.doc(id).delete();
        res.status(200).send(`Item com o id ${JSON.stringify(req.body.id)} apagado com Sucesso`);
    }
    catch(err){
        res.status(400).send(err.message);
    }
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
