'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pedidos', {
        templateUrl: 'app/pedidos/pedidos.html',
        controller: 'PedidosCtrl'
      });
  });
