'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/productos', {
        templateUrl: 'app/productos/productos.html',
        controller: 'ProductosCtrl'
      });
  });
