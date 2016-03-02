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



    for (var i = 0; i < 500; i++) {
      $scope.nuevoCliente = {
        "nit": ""+i,
        "nombre": "Cliente",
        "telefono": "555-55-55",
        "fax": "4575121",
        "ciudad": "Medellín",
        "direccion": "Calle 5487",
        "email": "cliente@instruequipos.com",
        "tipo_persona": 1,
        "gran_contribuyente": 0
      };
      // Cliente.crear($scope.nuevoCliente)
      //     .then(function(data) {
      //         // $scope.clientes = data;
      //     })
      //     .catch(function(err) {
      //       console.log(err);
      //   });
    }


  });
