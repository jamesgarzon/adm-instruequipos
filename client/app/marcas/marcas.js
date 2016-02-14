'use strict';

angular.module('adminInstruequiposApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/marcas', {
        templateUrl: 'app/marcas/marcas.html',
        controller: 'MarcasCtrl'
      });
  });
