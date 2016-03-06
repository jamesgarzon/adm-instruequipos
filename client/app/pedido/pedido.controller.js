'use strict';

angular.module('adminInstruequiposApp')
  .controller('PedidoCtrl', function ($scope, Pedido, $routeParams) {
    Pedido.obtener($routeParams.idPedido)
    .then(function(data){
      $scope.pedido = data
    })
    .catch(function(err){
      Materialize.toast('No se pudo obtener el producto', 4000) // 4000 is the duration of the toast

    },)
  });
