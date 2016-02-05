'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductoSchema = new mongoose.Schema({
  codigo: String,
  descripcion: String,
  costo : Number,
  venta : Number,
  impuesto : Number,
  stock : Number,
  marca : String,
  ultima_modificacion : Date
  // name: String,
  // info: String,
  // active: Boolean
});

export default mongoose.model('Producto', ProductoSchema);
