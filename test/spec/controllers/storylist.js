'use strict';

describe('Controller: StorylistCtrl', function () {

  // load the controller's module
  beforeEach(module('guardianApp'));

  var StorylistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StorylistCtrl = $controller('StorylistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
