'use strict';
const mongoose = require('mongoose');
const Leilao = mongoose.model('Leilao');
exports.get = async(idUser) => {
    const res = await Leilao.find({
        owner: idUser
    });
    return res;
};
exports.getById = async(id) => {
    const res = await Leilao.findById(id);
    return res;
};

exports.create = async(data) => {
    const Leilao = new Leilao(data);
    await Leilao.save();
};
exports.update = async(id, data) => {
    await Leilao.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            slug: data.slug,
            slug: data.slug,
            startson: data.startson,
            finisheson: data.finisheson,
            status: data.status
        }
    })
};

exports.delete = async(id) => {
    await Leilao.findOneAndRemove(id);
}