'use strict';

var app = require('../..');
import request from 'supertest';

var newVenta;

describe('Venta API:', function() {

  describe('GET /api/ventas', function() {
    var ventas;

    beforeEach(function(done) {
      request(app)
        .get('/api/ventas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          ventas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      ventas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/ventas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/ventas')
        .send({
          name: 'New Venta',
          info: 'This is the brand new venta!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newVenta = res.body;
          done();
        });
    });

    it('should respond with the newly created venta', function() {
      newVenta.name.should.equal('New Venta');
      newVenta.info.should.equal('This is the brand new venta!!!');
    });

  });

  describe('GET /api/ventas/:id', function() {
    var venta;

    beforeEach(function(done) {
      request(app)
        .get('/api/ventas/' + newVenta._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          venta = res.body;
          done();
        });
    });

    afterEach(function() {
      venta = {};
    });

    it('should respond with the requested venta', function() {
      venta.name.should.equal('New Venta');
      venta.info.should.equal('This is the brand new venta!!!');
    });

  });

  describe('PUT /api/ventas/:id', function() {
    var updatedVenta;

    beforeEach(function(done) {
      request(app)
        .put('/api/ventas/' + newVenta._id)
        .send({
          name: 'Updated Venta',
          info: 'This is the updated venta!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedVenta = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedVenta = {};
    });

    it('should respond with the updated venta', function() {
      updatedVenta.name.should.equal('Updated Venta');
      updatedVenta.info.should.equal('This is the updated venta!!!');
    });

  });

  describe('DELETE /api/ventas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/ventas/' + newVenta._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when venta does not exist', function(done) {
      request(app)
        .delete('/api/ventas/' + newVenta._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
