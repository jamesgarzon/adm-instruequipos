'use strict';

describe('Controller: MarcasCtrl', function () {

  // load the controller's module
  beforeEach(module('adminInstruequiposApp'));

  var MarcasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarcasCtrl = $controller('MarcasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
