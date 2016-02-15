/**
 * Cliente model events
 */

'use strict';

import {EventEmitter} from 'events';
var Cliente = require('./cliente.model');
var ClienteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ClienteEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Cliente.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ClienteEvents.emit(event + ':' + doc._id, doc);
    ClienteEvents.emit(event, doc);
  }
}

export default ClienteEvents;
