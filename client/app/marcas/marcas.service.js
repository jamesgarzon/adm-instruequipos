'use strict';
angular.module('adminInstruequiposApp')
.factory('Marca',function($http, $route, $q){

var servicio = {};

// Servicio para listar productos
servicio.listar = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/marcas')
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

// Servicio para crear un nuevo productos
// parametro productoACrear => objeto estudiante que se va a actualizar
servicio.crear = function (marcaACrear) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/marcas', marcaACrear)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

servicio.actualizar = function (marcaAActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/marcas/'+marcaAActualizar._id, marcaAActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};


servicio.obtener = function (codigoProducto) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/marcas/codigo/'+ codigoProducto)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

servicio.eliminar = function (idProducto) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/marcas/codigo/'+ idProducto)
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
