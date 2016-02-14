/**
 * Marca model events
 */

'use strict';

import {EventEmitter} from 'events';
var Marca = require('./marca.model');
var MarcaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MarcaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Marca.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MarcaEvents.emit(event + ':' + doc._id, doc);
    MarcaEvents.emit(event, doc);
  }
}

export default MarcaEvents;
