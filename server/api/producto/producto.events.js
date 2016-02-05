/**
 * Producto model events
 */

'use strict';

import {EventEmitter} from 'events';
var Producto = require('./producto.model');
var ProductoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProductoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Producto.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ProductoEvents.emit(event + ':' + doc._id, doc);
    ProductoEvents.emit(event, doc);
  }
}

export default ProductoEvents;
