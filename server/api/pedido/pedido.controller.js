/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pedidos              ->  index
 * POST    /api/pedidos              ->  create
 * GET     /api/pedidos/:id          ->  show
 * PUT     /api/pedidos/:id          ->  update
 * DELETE  /api/pedidos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Pedido from './pedido.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Pedidos
export function index(req, res) {
  Pedido.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Pedido from the DB
export function show(req, res) {
  Pedido.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Pedido in the DB
export function create(req, res) {
  Pedido.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Pedido in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Pedido.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Pedido from the DB
export function destroy(req, res) {
  Pedido.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
