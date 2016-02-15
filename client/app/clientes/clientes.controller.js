'use strict';

angular.module('adminInstruequiposApp')
  .controller('ClientesCtrl', function ($scope, Cliente) {
    $scope.message = 'Hello';

  // Initialize collapse button
  $(".button-collapse-clientes").sideNav();
   $('.scrollspy').scrollSpy();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();


  Cliente.listar()
      .then(function(data) {
          $scope.clientes = data;
      })
      .catch(function(err) {
        console.log(err);
    });


  });
