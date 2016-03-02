'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ventaCtrlStub = {
  index: 'ventaCtrl.index',
  show: 'ventaCtrl.show',
  create: 'ventaCtrl.create',
  update: 'ventaCtrl.update',
  destroy: 'ventaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ventaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './venta.controller': ventaCtrlStub
});

describe('Venta API Router:', function() {

  it('should return an express router instance', function() {
    ventaIndex.should.equal(routerStub);
  });

  describe('GET /api/ventas', function() {

    it('should route to venta.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ventaCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/ventas/:id', function() {

    it('should route to venta.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ventaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/ventas', function() {

    it('should route to venta.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ventaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/ventas/:id', function() {

    it('should route to venta.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'ventaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/ventas/:id', function() {

    it('should route to venta.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'ventaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/ventas/:id', function() {

    it('should route to venta.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ventaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
