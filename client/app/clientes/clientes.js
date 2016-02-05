'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/clientes', {
        templateUrl: 'app/clientes/clientes.html',
        controller: 'ClientesCtrl'
      });
  });
