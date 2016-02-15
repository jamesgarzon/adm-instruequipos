'use strict';

var app = require('../..');
import request from 'supertest';

var newCliente;

describe('Cliente API:', function() {

  describe('GET /api/clientes', function() {
    var clientes;

    beforeEach(function(done) {
      request(app)
        .get('/api/clientes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          clientes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      clientes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/clientes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/clientes')
        .send({
          name: 'New Cliente',
          info: 'This is the brand new cliente!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCliente = res.body;
          done();
        });
    });

    it('should respond with the newly created cliente', function() {
      newCliente.name.should.equal('New Cliente');
      newCliente.info.should.equal('This is the brand new cliente!!!');
    });

  });

  describe('GET /api/clientes/:id', function() {
    var cliente;

    beforeEach(function(done) {
      request(app)
        .get('/api/clientes/' + newCliente._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          cliente = res.body;
          done();
        });
    });

    afterEach(function() {
      cliente = {};
    });

    it('should respond with the requested cliente', function() {
      cliente.name.should.equal('New Cliente');
      cliente.info.should.equal('This is the brand new cliente!!!');
    });

  });

  describe('PUT /api/clientes/:id', function() {
    var updatedCliente;

    beforeEach(function(done) {
      request(app)
        .put('/api/clientes/' + newCliente._id)
        .send({
          name: 'Updated Cliente',
          info: 'This is the updated cliente!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCliente = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCliente = {};
    });

    it('should respond with the updated cliente', function() {
      updatedCliente.name.should.equal('Updated Cliente');
      updatedCliente.info.should.equal('This is the updated cliente!!!');
    });

  });

  describe('DELETE /api/clientes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/clientes/' + newCliente._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when cliente does not exist', function(done) {
      request(app)
        .delete('/api/clientes/' + newCliente._id)
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
