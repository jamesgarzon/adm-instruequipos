'use strict';

var app = require('../..');
import request from 'supertest';

var newMarca;

describe('Marca API:', function() {

  describe('GET /api/marcas', function() {
    var marcas;

    beforeEach(function(done) {
      request(app)
        .get('/api/marcas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          marcas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      marcas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/marcas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/marcas')
        .send({
          name: 'New Marca',
          info: 'This is the brand new marca!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMarca = res.body;
          done();
        });
    });

    it('should respond with the newly created marca', function() {
      newMarca.name.should.equal('New Marca');
      newMarca.info.should.equal('This is the brand new marca!!!');
    });

  });

  describe('GET /api/marcas/:id', function() {
    var marca;

    beforeEach(function(done) {
      request(app)
        .get('/api/marcas/' + newMarca._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          marca = res.body;
          done();
        });
    });

    afterEach(function() {
      marca = {};
    });

    it('should respond with the requested marca', function() {
      marca.name.should.equal('New Marca');
      marca.info.should.equal('This is the brand new marca!!!');
    });

  });

  describe('PUT /api/marcas/:id', function() {
    var updatedMarca;

    beforeEach(function(done) {
      request(app)
        .put('/api/marcas/' + newMarca._id)
        .send({
          name: 'Updated Marca',
          info: 'This is the updated marca!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMarca = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMarca = {};
    });

    it('should respond with the updated marca', function() {
      updatedMarca.name.should.equal('Updated Marca');
      updatedMarca.info.should.equal('This is the updated marca!!!');
    });

  });

  describe('DELETE /api/marcas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/marcas/' + newMarca._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when marca does not exist', function(done) {
      request(app)
        .delete('/api/marcas/' + newMarca._id)
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
