'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
      type: String,
      required:true
  },
  email: {
      type:String,
      required: true
  },
  password: {
      type:String,
      required: true
  },
  cpf:{
      type:String,
      required:true
  },
  access:{
      type:String,
      required: true,
      enum:['admin','leiloeiro','cliente'],
      default:'cliente'
  }
});

module.exports = mongoose.model('Users', schema);