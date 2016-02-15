'use strict';
angular.module('adminInstruequiposApp')
.factory('Cliente',function($http, $route, $q){

var servicio = {};

// Servicio para listar clientes
servicio.listar = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/clientes')
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

// Servicio para crear un nuevo clientes
// parametro clienteACrear => objeto estudiante que se va a actualizar
servicio.crear = function (clienteACrear) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/clientes', clienteACrear)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

servicio.actualizar = function (clienteAActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/clientes/'+clienteAActualizar._id, clienteAActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};


servicio.obtenerProducto = function (nitCliente) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/clientes/codigo/'+ nitCliente)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

servicio.eliminar = function (idCliente) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/clientes/'+ idCliente)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};



 return servicio;

 });
