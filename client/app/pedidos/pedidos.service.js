'use strict';
angular.module('adminInstruequiposApp')
.factory('Pedido',function($http, $route, $q){

var servicio = {};

// LISTAR PEDIDOS
servicio.listar = function () {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/pedidos')
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// CREAR PEDIDO
// parametro pedidoACrear => objeto pedido que se va a crear
servicio.crear = function (pedidoACrear) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.post('/api/pedidos', pedidoACrear)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// ACTUALIZAR PEDIDO
// parametro pedidoAActualizar => objeto pedido que se va a actualizar
servicio.actualizar = function (pedidoAActualizar) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.put('/api/pedidos/'+pedidoAActualizar._id, pedidoAActualizar)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// OBTENER PEDIDO
// parametro idPedido => objeto pedido que se va a obtener
servicio.obtener = function (idPedido) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.get('/api/pedidos/'+ idPedido)
			.success(function(data) {
					defered.resolve(data);
			})
			.error(function(err) {
					defered.reject(err);
			});
	return promise;
};

// ELIMINAR PEDIDO
// parametro idPedido => objeto pedido que se va a eliminar
servicio.eliminar = function (idPedido) {
	var defered = $q.defer();
	var promise = defered.promise;
	$http.delete('/api/pedidos/'+ idPedido)
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
