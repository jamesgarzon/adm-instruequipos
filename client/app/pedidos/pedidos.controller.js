'use strict';

angular.module('adminInstruequiposApp')
  .controller('PedidosCtrl', function ($scope, Pedido) {

    $scope.listarPedidos = function () {
    Pedido.listar()
        .then(function(data) {
            $scope.pedidos = data;
        })
        .catch(function(err) {
          console.log(err);
      });

    }

    $scope.listarPedidos();
  });
