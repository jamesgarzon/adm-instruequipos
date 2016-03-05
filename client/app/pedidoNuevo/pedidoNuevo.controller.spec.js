'use strict';

describe('Controller: PedidoNuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('adminInstruequiposApp'));

  var PedidoNuevoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PedidoNuevoCtrl = $controller('PedidoNuevoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
