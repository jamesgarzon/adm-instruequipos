'use strict';

angular.module('adminInstruequiposApp')
  .controller('MarcasCtrl', function ($scope,Marca) {
    $scope.message = 'Hello';
    Marca.listar()
        .then(function(data) {
            $scope.marcas = data;
        })
        .catch(function(err) {
          console.log(err);
      });
  });
