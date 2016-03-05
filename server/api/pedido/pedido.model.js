'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
autoIncrement = require('mongoose-auto-increment');


var connection = mongoose.createConnection("mongodb://localhost/admininstruequipos-dev");

autoIncrement.initialize(connection);

var PedidoSchema = new mongoose.Schema({
  cliente : {
    nit: String,
    nombre: String,
    telefono: String,
    fax: String,
    ciudad: String,
    direccion: String,
    email: String,
    tipo_persona: Number,
    gran_contribuyente: Number,
    comprador :
      {
        tipo_documento : String,
        documento : String,
        nombres : String,
        apellidos : String,
        telefono : String,
        direccion : String,
        email : String
      }
  },
  vendedor : {
    tipo_documento : String,
    documento : String,
    nombres : String,
    apellidos : String,
    telefono : String,
    direccion : String,
    email : String
  },
  fecha_emision : String,
  fecha_solicitud : String,
  fecha_entrega : String,
  tipo_pago : String,
  observaciones : String,
  orden_compra : String,
  items : [
    {
      codigo : String,
      descripcion : String,
      cantidad : Number,
      valor_unitario : Number
    }
  ]
});

PedidoSchema.plugin(autoIncrement.plugin,{
    model: 'Pedido',
    field: 'pedidoId',
    startAt: 1,
    incrementBy: 1
});

export default mongoose.model('Pedido', PedidoSchema);
//
// {
//   "cliente" : {
//       "nit" : "900.540.554-9",
//       "nombre" : "JAMESCORP",
//       "telefono" : "555-55-55",
//       "fax" : "546-4871",
//       "ciudad" : "MEDELLIN",
//       "direccion" : "Calle 54A Nro. 45B - 12 ",
//       "email" : "jamescorp@gmail.com",
//       "pagina_web" : "jamescorp.co",
//       "tipo_persona": 1,
//       "gran_contribuyente": 2,
//       "compradores" : [
//         {
//           "tipo_documento" : "CC",
//           "documento" : "1040040896",
//           "nombres" : "JAMES",
//           "apellidos" : "GARZÓN OTALVARO",
//           "telefono" : "5537788",
//           "direccion" : "CALLE 78 # 44-54",
//           "email" : "james.garzon@udea.edu.co"
//         }
//       ]
//   },
//   "vendedor" : {
//     "tipo_documento" : "CC",
//     "documento" : "9441789",
//     "nombres" : "ANDRES",
//     "apellidos" : "CARDONA",
//     "telefono" : "444-89-98",
//     "direccion" : "ITAGUI",
//     "email" : "info@instruequipos.co"
//   },
//   "fecha_emision" : "2016-02-11",
//   "fecha_solicitud" : "2016-02-12",
//   "fecha_entrega" : "2016-03-15",
//   "medio_pago" : "CREDITO",
//   "observaciones" : "Se observa que ...",
//   "items" : [
//     {
//       "codigo" : "90010",
//       "descripcion" : "Sensor de nivel tipo electrodo tripolar. Cnx: 1 - 1/2. Long: 1,50cm",
//       "cantidad" : 1,
//       "valor_unitario" : 304425
//     },
//     {
//       "codigo" : "90011",
//       "descripcion" : "Control de nivel, Marca; Aeco, Ref: CL 101.",
//       "cantidad" : 1,
//       "valor_unitario" : 340000
//     }
//   ]
// }
