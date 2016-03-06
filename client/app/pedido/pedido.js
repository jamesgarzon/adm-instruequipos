'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pedidos/ver/:idPedido', {
        templateUrl: 'app/pedido/pedido.html',
        controller: 'PedidoCtrl'
      });
  });
