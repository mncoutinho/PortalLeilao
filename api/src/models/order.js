'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  number:{
      type:String,
      required:true
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
  },
  soldItem:[{
      artigo:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artigos'
        },
  lastbid:{
      type:Number,
      required:true
  }
  }],
});

module.exports = mongoose.model('Order', schema);