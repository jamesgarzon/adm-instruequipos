'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var MarcaSchema = new mongoose.Schema({
  nombre: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Marca', MarcaSchema);
