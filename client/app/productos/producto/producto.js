'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/productos/:codigo', {
        templateUrl: 'app/productos/producto/producto.html',
        controller: 'ProductoCtrl'
      });
  });
