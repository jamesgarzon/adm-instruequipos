'use strict';

angular.module('adminInstruequiposApp')
.controller('ProductoCtrl', function ($scope, $routeParams, $location, Producto, Modal) {

  $scope.vista = 'ver';
  $scope.currentPage = 1;
  $scope.pageSize = 3;
  
  $scope.obtenerProducto = function () {
    Producto.obtenerProducto($routeParams.codigo)
    .then(function(data) {
      $scope.productoSeleccionado = data;
      $scope.productoAEditar = angular.copy($scope.productoSeleccionado);
      $scope.productoAEditar.iva = $scope.productoAEditar.iva.toString();
    })
    .catch(function(err) {
      alert("No fue posible encontrar el producto");
      $location.path('/productos');
    });
  }

  $scope.cancelarCambios = function () {
    $scope.vista = 'ver';
    $scope.productoAEditar = angular.copy($scope.productoSeleccionado);
    $scope.productoAEditar.iva = $scope.productoAEditar.iva.toString();
  }

  $scope.actualizarProducto =  Modal.confirm.actualizar(function() {
    $scope.productoAEditar.iva = parseInt($scope.productoAEditar.iva);
    $scope.productoAEditar.ultima_modificacion = new Date();
    Producto.actualizar($scope.productoAEditar)
    .then(function(data) {
      alert("Actualización exitosa");
      $scope.obtenerProducto();
      $scope.vista = 'ver';
    })
    .catch(function(err) {
      alert("No fue posible actualizar el producto");

    });


  });

  $scope.obtenerProducto();

});
