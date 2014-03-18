'use strict';

describe('Directive: storyStatus', function () {

  // load the directive's module
  beforeEach(module('guardianApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<story-status></story-status>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the storyStatus directive');
  }));
});
