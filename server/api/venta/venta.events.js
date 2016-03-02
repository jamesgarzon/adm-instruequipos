/**
 * Venta model events
 */

'use strict';

import {EventEmitter} from 'events';
var Venta = require('./venta.model');
var VentaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
VentaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Venta.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    VentaEvents.emit(event + ':' + doc._id, doc);
    VentaEvents.emit(event, doc);
  }
}

export default VentaEvents;
