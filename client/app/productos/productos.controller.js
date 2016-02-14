'use strict';

angular.module('adminInstruequiposApp')
  .controller('ProductosCtrl', function ($scope,$location,Producto,Marca) {

    $(document).ready(function() {
        // $('select').material_select();
        $('input, textarea').characterCounter();
        $('.modal-trigger').leanModal();
        // $('.button-collapse').sideNav();
        $('.collapsible').collapsible();
    });

    $scope.vista = 'listarProductos';
    $scope.vistaProducto = 'ver';

    $scope.listarProductos = function () {
    Producto.listar()
        .then(function(data) {
            $scope.productos = data;
        })
        .catch(function(err) {
          console.log(err);
      });

    }

    $scope.listarProductos();

      Marca.listar()
          .then(function(data) {
              $scope.marcas = data;
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

      $scope.crearProducto = function (nuevoProducto) {
        nuevoProducto.stock=0;
        Producto.crear(nuevoProducto)
        .then(function(data){
           $('#modal-product-form').closeModal();
           $scope.listarProductos();
           Materialize.toast('Producto creado exitosamente', 4000) // 4000 is the duration of the toast
        })
        .catch(function(err){
          if (err.code==11000) {
            Materialize.toast('El ya existe un producto con ese código, por favor intente con otro', 4000) // 4000 is the duration of the toast

          }
        })
      }






  });
