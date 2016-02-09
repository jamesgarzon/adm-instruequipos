'use strict';

angular.module('adminInstruequiposApp')
  .controller('ProductosCtrl', function ($scope,$location,Producto) {
    $scope.vista = 'listarProductos';
    $scope.vistaProducto = 'ver';

    Producto.listar()
        .then(function(data) {
            $scope.productos = data;
        })
        .catch(function(err) {
          console.log(err);
      });

      $scope.seleccionarProducto = function (producto) {
        // $scope.productoSeleccionado = angular.copy(producto);
        // $scope.vista = 'VerProducto';
        $location.path('/productos/'+producto.codigo);
      }
      $scope.cambiarVista = function (nuevaVista) {
        $scope.vista = nuevaVista;
      }

      $scope.myValidator = function(newValue) {
        console.log(newValue);
        return true;
      };


  });
