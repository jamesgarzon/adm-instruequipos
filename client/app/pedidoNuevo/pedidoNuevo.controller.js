'use strict';

angular.module('adminInstruequiposApp')
  .controller('PedidoNuevoCtrl', function ($scope, Cliente) {
    // $scope.checked = true;
    $scope.vendedores = [{
        tipo_documento : "CC",
        documento : "9441789",
        nombres : "ANDRES",
        apellidos : "CARDONA",
        telefono : "444-89-98",
        direccion : "ITAGUI",
        email : "info@instruequipos.co"
      },
      {
          tipo_documento : "CC",
          documento : "484512",
          nombres : "SEBASTIAN",
          apellidos : "GARCIA",
          telefono : "444-89-98",
          direccion : "MEDELLIN",
          email : "sebastian@instruequipos.co"
        }
      ];

    $scope.listarClientes = function () {
    Cliente.listar()
        .then(function(data) {
            $scope.clientes = data;
        })
        .catch(function(err) {
          console.log(err);
      });

    }

    $scope.listarClientes();

  });
