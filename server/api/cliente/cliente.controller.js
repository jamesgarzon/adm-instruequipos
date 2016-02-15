/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/clientes              ->  index
 * POST    /api/clientes              ->  create
 * GET     /api/clientes/:id          ->  show
 * PUT     /api/clientes/:id          ->  update
 * DELETE  /api/clientes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Cliente from './cliente.model';

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

// Gets a list of Clientes
export function index(req, res) {
  Cliente.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Cliente from the DB
export function show(req, res) {
  Cliente.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Cliente in the DB
export function create(req, res) {
  Cliente.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Cliente in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Cliente.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Cliente from the DB
export function destroy(req, res) {
  Cliente.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
