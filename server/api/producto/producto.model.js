'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductoSchema = new mongoose.Schema({
  codigo: { type : String , unique : true, required : true, runValidators: true},
  descripcion: String,
  costo : Number,
  venta : Number,
  iva : Number,
  stock : Number,
  marca : String,
  ultima_modificacion : Date

  // name: String,
  // info: String,
  // active: Boolean
});

export default mongoose.model('Producto', ProductoSchema);
