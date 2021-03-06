/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/productos              ->  index
 * POST    /api/productos              ->  create
 * GET     /api/productos/:id          ->  show
 * PUT     /api/productos/:id          ->  update
 * DELETE  /api/productos/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Producto from './producto.model';

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

// Gets a list of Productos
export function index(req, res) {
  Producto.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Producto from the DB
export function show(req, res) {
  Producto.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function obtenerProductoPorCodigo(req, res) {
  console.log(req.params.id);
  Producto.findOne({ codigo: req.params.id } )
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Producto in the DB
export function create(req, res) {
  Producto.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Producto in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Producto.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Producto from the DB
export function destroy(req, res) {
  Producto.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
