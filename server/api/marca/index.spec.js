'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var marcaCtrlStub = {
  index: 'marcaCtrl.index',
  show: 'marcaCtrl.show',
  create: 'marcaCtrl.create',
  update: 'marcaCtrl.update',
  destroy: 'marcaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var marcaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './marca.controller': marcaCtrlStub
});

describe('Marca API Router:', function() {

  it('should return an express router instance', function() {
    marcaIndex.should.equal(routerStub);
  });

  describe('GET /api/marcas', function() {

    it('should route to marca.controller.index', function() {
      routerStub.get
        .withArgs('/', 'marcaCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/marcas/:id', function() {

    it('should route to marca.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'marcaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/marcas', function() {

    it('should route to marca.controller.create', function() {
      routerStub.post
        .withArgs('/', 'marcaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/marcas/:id', function() {

    it('should route to marca.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'marcaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/marcas/:id', function() {

    it('should route to marca.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'marcaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/marcas/:id', function() {

    it('should route to marca.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'marcaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
