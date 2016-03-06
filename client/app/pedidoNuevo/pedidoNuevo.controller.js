'use strict';

angular.module('adminInstruequiposApp')
  .controller('PedidoNuevoCtrl', function ($scope, Cliente, Producto, Pedido) {

    $scope.hoy = new Date();
    // $scope.items = [{codigo:'',descripcion:'',cantidad:0,valor:0}
    // ];
    // $scope.agregarItem = function () {
    //   $scope.items.push({codigo:'',descripcion:'',cantidad:0,valor:0})
    // }

    $scope.agregarItem = function (item) {
      if (!$scope.items) {
        $scope.items = [];
      }
      if (!item) {
        item = {codigo:'',descripcion:'',cantidad:0,valor:0};
      }
      $scope.itemCopia = angular.copy(item);
      $scope.items.push($scope.itemCopia);
      $scope.nuevoItem = {};
    }

    $scope.eliminarItem = function (item) {
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index,1);
    }

    $scope.getTotal = function(){
      // if ($scope.items) {
      //
      //     var total = 0;
      //     for(var i = 0; i < $scope.items.length; i++){
      //       if (item && item.cantidad && item.valor_unitario) {
      //       var item = $scope.items[i];
      //         total += (item.cantidad * item.valor_unitario);
      //       }
      //     }
      //     return total;
      //
      //
      // }

      var total = 0;
    angular.forEach($scope.items, function(item) {
        total += item.cantidad * item.valor_unitario;
    })

    return total;
}

    // $scope.checked = true;
    $scope.vendedores = [{
        tipo_documento : "CC",
        documento : "9441789",
        nombres : "ANDRES",
        apellidos : "CARDONA",
        telefono : "444-89-98",
        direccion : "ITAGUI",
        email : "info@instruequipos.co"
      },
      {
          tipo_documento : "CC",
          documento : "484512",
          nombres : "SEBASTIAN",
          apellidos : "GARCIA",
          telefono : "444-89-98",
          direccion : "MEDELLIN",
          email : "sebastian@instruequipos.co"
        }
      ];

    $scope.listarClientes = function () {
    Cliente.listar()
        .then(function(data) {
            $scope.clientes = data;
        })
        .catch(function(err) {
          console.log(err);
      });

    };

    $scope.listarProductos = function () {
    Producto.listar()
        .then(function(data) {
            $scope.productos = data;
            $scope.nombreProductos = [];
            for (var i = 0; i < $scope.productos.length; i++) {
              $scope.nombreProductos.push($scope.productos[i].descripcion);
              $scope.productos[i].cantidad = 1;
              $scope.productos[i].valor_unitario = $scope.productos[i].venta;
            }
        })
        .catch(function(err) {
          console.log(err);
      });

    };

    $scope.seleccionarItem = function (item, busqueda) {
      if (busqueda) {

      for (var i = 0; i < $scope.productos.length; i++) {
          console.log("producto: "+$scope.productos[i]);
        if ($scope.productos[i].descripcion == busqueda) {
          item.codigo = $scope.productos[i].codigo;
          item.descripcion = $scope.productos[i].descripcion;
          item.valor = $scope.productos[i].venta;
        }
      }
      }
      // return='';
    }

    $scope.generarPedido = function () {
      $scope.nuevoPedido.items = $scope.items;
      $scope.nuevoPedido.fecha_emision = $scope.hoy;
      Pedido.crear($scope.nuevoPedido)
      .then(function(data){
           Materialize.toast('Pedido creado exitosamente', 4000) // 4000 is the duration of the toast
      })
      .catch(function(err){
        console.log(err);
      });

    }




    $scope.listarClientes();
    $scope.listarProductos();


  });
