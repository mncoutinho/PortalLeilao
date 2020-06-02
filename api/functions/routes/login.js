const db = require('../index');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginApp = express.Router();

loginApp.use(bodyParser.json());
loginApp.use(bodyParser.urlencoded({extended:false}));
loginApp.use(cors({origin:true}))

const user = db.collection('user');
loginApp.get('/', (req, res) => res.send('retornando login'));
//buscar pelo cpf
loginApp.post('/getUserByCpf', async (req,res) => {
    try{
        let cpf = req.body.cpf;
        let query = await user.where('cpf', '==', cpf).get().then(snapshot =>{
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
            return users;
        })
        res.status(200).send(query);
    }
    catch(err){
        res.status(400).send(err.message);
    }
});

loginApp.get('/getAllUsers', async (req, res) => {
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
        res.status(200).send(`Gravado!${JSON.stringify(query)}`)
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

module.exports = loginApp;