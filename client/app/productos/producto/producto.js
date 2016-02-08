'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/productos/:id', {
        templateUrl: 'app/productos/producto/producto.html',
        controller: 'ProductoCtrl'
      });
  });
