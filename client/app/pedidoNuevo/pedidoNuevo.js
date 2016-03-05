'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pedidos/nuevo', {
        templateUrl: 'app/pedidoNuevo/pedidoNuevo.html',
        controller: 'PedidoNuevoCtrl'
      });
  });
