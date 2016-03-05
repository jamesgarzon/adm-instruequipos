'use strict';

angular.module('adminInstruequiposApp')
  .controller('PedidoNuevoCtrl', function ($scope, Cliente, Producto) {

    $scope.hoy = new Date();
    $scope.items = [{codigo:'',descripcion:'',cantidad:0,valor:0}
    ];

    $scope.agregarItem = function () {
      $scope.items.push({codigo:'',descripcion:'',cantidad:0,valor:0})
    }
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

    };

    $scope.listarProductos = function () {
    Producto.listar()
        .then(function(data) {
            $scope.productos = data;
        })
        .catch(function(err) {
          console.log(err);
      });

    };


    $scope.listarClientes();
    $scope.listarProductos();


  });
