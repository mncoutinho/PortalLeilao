'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
      type: String,
      required:true
  },
  slug:{
    type:String,
    required: true,
    unique: true,
    index: true,
    trim:true
},
  owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
  },
  beginning:{
      type:Date,
      required:true,
      default: Date.now
  },
  startson:{
      type:Date,
      required:true
  },
  finisheson:{
      type:Date,
      required:true
  },
  artigos:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Artigos'
  }],
  status:{
      type: String,
      required: true,
      enum: ['ativo','finalizado','ao vivo'],
      default:'ativo'
  }
});

module.exports = mongoose.model('Leilao', schema);