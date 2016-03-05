'use strict';

describe('Controller: PedidosCtrl', function () {

  // load the controller's module
  beforeEach(module('adminInstruequiposApp'));

  var PedidosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PedidosCtrl = $controller('PedidosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
