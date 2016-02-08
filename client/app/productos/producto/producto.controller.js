'use strict';

angular.module('adminInstruequiposApp')
  .controller('ProductoCtrl', function ($scope, Producto) {

    Producto.obtenerProducto('11')
        .then(function(data) {
          alert("dddd");
            $scope.productoSeleccionado = data;
        })
        .catch(function(err) {
          alert("dgggg");
          console.log(err);
      });

  });
