'use strict';

describe('Controller: sysCtrl', function () {

  // load the controller's module
  beforeEach(module('bbangApp'));

  var sysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('sysCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of bbasystems to the scope', function () {
    expect(scope.bbasystems.length).toBe(3);
  });
});
