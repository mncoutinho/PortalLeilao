const db = require('../index');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const itemApp = express.Router();

itemApp.use(bodyParser.json());
itemApp.use(bodyParser.urlencoded({extended:false}));
itemApp.use(cors({origin:true}));

const items = db.collection('item');
itemApp.get('/', (req, res) => res.send('retornando item'));
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
        let query = await items.doc(id).get().then(doc => {
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
//filtro de busca
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

/*
// Iniciando Storage
const storage = admin.storage();
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
*/
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
        await items.add(newItem);
        res.status(200).send(`${req.body.name} gravado com Sucesso!`);
    }
    catch(err){
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
        await items.doc(id).update(Item);
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

module.exports = itemApp;