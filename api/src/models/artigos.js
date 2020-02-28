'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    slug:{
        type:String,
        required: true,
        unique: true,
        index: true,
        trim:true
    },
    title:{ 
        type:String,
        required: true,
        trim: true
        },
    description: {
        type:String,
        required: true
    },
    initialbid: {
        type: Number,
        required: true
    },
    lastbid:{
        type:Number,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    images: [{
            type:String,
            required: true,
            trim: true
        }],
    leilao: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Leilao'
    }]
});

module.exports = mongoose.model('Artigos', schema);