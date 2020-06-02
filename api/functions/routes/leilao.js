const db = require('../index');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const leilaoApp = express.Router();

leilaoApp.use(bodyParser.json());
leilaoApp.use(bodyParser.urlencoded({extended:false}));
leilaoApp.use(cors({origin:true}));

const leiloes = db.collection('leilao');
leilaoApp.get('/', (req, res) => res.send('retornando leilao'));


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
        await leiloes.add(newBid);
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
        await leiloes.doc(id).update(bid);
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

module.exports = leilaoApp;