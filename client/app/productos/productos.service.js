'use strict';
angular.module('adminInstruequiposApp')
.factory('Producto',function($http, $route, Modal, $q){

var servicio = {};

var defered = $q.defer();
var promise = defered.promise;

// Servicio para listar productos
servicio.listar = function () {

	$http.get('/api/productos')
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
servicio.crear = function (productoACrear) {

	$http.post('/api/productos', productoACrear)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};

servicio.actualizar = function (estudianteAActualizar) {

	$http.put('/api/productos/'+estudianteAActualizar._id, estudianteAActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});

	return promise;
};


servicio.obtenerProducto = function (codigoProducto) {

	$http.get('/api/productos/codigo/'+ codigoProducto)
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
