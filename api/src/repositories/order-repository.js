'use strict';
const repository = require('../repositories/order-repository');

exports.get = async(req, res, next) => {
    try{
        const data = await repository.get();
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
};
exports.getbyId = async(req, res, next) => {
    try{
        const data = await repository.getById(req.body.id);
        res.status(200).send(data)
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
};
exports.getByLeilao = async(req, res, next) => {
    try{
        const data = await repository.getByLeilao(req.body.idleilao);
        res.status(200).send(data)
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
};
exports.post = async(req, res, next) => {
    try{
        await repository.create(req.body);
            res.status(200).send({ 
                message: 'Artigo cadastrado com sucesso'
            });
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
};

exports.put = async(req, res, next) => {
   try{
    await repository.update(req.body.id, req.body);
        res.status(200).send({ 
            message: 'Artigo atualizado com sucesso'
        });
   }catch(e){
    res.status(500).send({
        message: 'Falha ao processar sua requisicao'
    });
}
};

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id);
        res.status(200).send({ 
            message: 'Artigo apagado com sucesso'
        }); 
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar sua requisicao'
        });
    }
};