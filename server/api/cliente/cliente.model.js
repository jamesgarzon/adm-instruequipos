'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ClienteSchema = new mongoose.Schema({
  nit: String,
  nombre: String,
  telefono: String,
  fax: String,
  ciudad: String,
  direccion: String,
  email: String,
  tipo_persona: Number,
  gran_contribuyente: Number
});

export default mongoose.model('Cliente', ClienteSchema);
