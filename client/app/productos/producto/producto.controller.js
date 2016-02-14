'use strict';

angular.module('adminInstruequiposApp')
.controller('ProductoCtrl', function ($scope, $routeParams, $location, Producto, Marca) {

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

  $scope.vista = 'ver';
  $scope.currentPage = 1;
  $scope.pageSize = 3;

  Marca.listar()
      .then(function(data) {
          $scope.marcas = data;
      })
      .catch(function(err) {
        console.log(err);
    });

  $scope.obtenerProducto = function () {
    Producto.obtenerProducto($routeParams.codigo)
    .then(function(data) {
      $scope.productoSeleccionado = data;
      $scope.productoAEditar = angular.copy($scope.productoSeleccionado);
      $scope.productoAEditar.iva = $scope.productoAEditar.iva.toString();
    })
    .catch(function(err) {
      alert('No fue posible encontrar el producto');
      $location.path('/productos');
    });
  };

  $scope.cancelarCambios = function () {
    $scope.vista = 'ver';
    $scope.productoAEditar = angular.copy($scope.productoSeleccionado);
    $scope.productoAEditar.iva = $scope.productoAEditar.iva.toString();
  };

  // $scope.actualizarProducto =  Modal.confirm.actualizar(function() {
  $scope.actualizarProducto =  function() {
    $scope.productoAEditar.iva = parseInt($scope.productoAEditar.iva);
    $scope.productoAEditar.ultima_modificacion = new Date();
    Producto.actualizar($scope.productoAEditar)
    .then(function(data) {
      Materialize.toast('Producto Actualizado exitosamente', 4000) // 4000 is the duration of the toast
      $scope.obtenerProducto();
      $scope.vista = 'ver';
    })
    .catch(function(err) {
      alert("No fue posible actualizar el producto");

    });
  };

  $scope.eliminarProducto = function () {
    Producto.eliminar($scope.productoSeleccionado._id)
    .then(function(data){
      // alert("Se eliminó exitosamente");
      Materialize.toast('Producto eliminado exitosamente', 4000) // 4000 is the duration of the toast
      $location.path("/productos");
    })
    .catch(function(err){
      console.log(err);
    })
  }

  $scope.obtenerProducto();

});
