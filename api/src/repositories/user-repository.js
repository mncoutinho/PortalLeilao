'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('Users');
exports.get = async() => {
    const res = await User.find();
    return res;
};
exports.create = async(data) => {
    const User = new User(data);
    await User.save();
};
exports.update = async(id, data) => {
    await User.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
        }
    })
};

exports.delete = async(id) => {
    await User.findOneAndRemove(id);
}