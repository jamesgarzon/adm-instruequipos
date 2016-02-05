'use strict';

describe('Controller: ClientesCtrl', function () {

  // load the controller's module
  beforeEach(module('adminInstruequiposApp'));

  var ClientesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientesCtrl = $controller('ClientesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
