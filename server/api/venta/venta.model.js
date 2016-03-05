'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
autoIncrement = require('mongoose-auto-increment');


var connection = mongoose.createConnection("mongodb://localhost/admininstruequipos-dev");

autoIncrement.initialize(connection);


var VentaSchema = new mongoose.Schema({
    cliente_nit: String,
    usuario: String,
    fecha_creacion : Date,
    fecha_vencimiento : Date,
    termino_pago: String,
    subtotal : Number,
    descuento : Number,
    flete : Number,
    otros_descuentos : String,
    es_anulada : Boolean,
    observaciones : String,
    vendedor : String,
    orden_de_compra: String,
    cotizacion: String,
    remision: String,
    orden_de_pedido : String,
    // iva: Number,
    // rete_fuente : Number,
    // rete_iva : Number,
    // creditos : [
    //
    // ],
    // debitos : [
    //
    // ],
    inpuestos : [
      {nombre:String, valor:Number} //iva,retefuente,reteiva, reteica
    ]
});
VentaSchema.plugin(autoIncrement.plugin,{
    model: 'Venta',
    field: 'ventaId',
    startAt: 1,
    incrementBy: 1
});
// var Venta = connection.model('Venta', VentaSchema);
export default mongoose.model('Venta', VentaSchema);
