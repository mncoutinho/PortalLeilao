'use strict';
const mongoose = require('mongoose');
const Artigo = mongoose.model('Artigos');
exports.get = async() => {
    const res = await Artigo.find();
    return res;
};
exports.getById = async(id) => {
    const res = await Artigo.findById(id);
    return res;
};


exports.getByLeilao = async(idleilao) => {
    const res = await Artigo.find({
        leilao:idleilao
    });
    return res;
};
exports.create = async(data) => {
    var artigo = new Artigo(data);
    await artigo.save();
};
exports.update = async(id, data) => {
    await Artigo.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            initialbid: data.initialbid
        }
    })
};

exports.delete = async(id) => {
    await Artigo.findOneAndRemove(id);
}