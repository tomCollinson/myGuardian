'use strict';

guardianApp.controller('HeaderCtrl', function($scope, $location, $route, $rootScope, $element, JsonCall) {

  JsonCall.get('scripts/sectionConfig.json', {}).then(function(response) {
    $rootScope.sections = response.data;
    $scope.section = $rootScope.sections;
  });

  $scope.isActive = function(item) {
    if (item.path === $location.path().substring(9)) {
      $scope.pageTitle = item.title;
      $rootScope.currentSection = item.path;
      return true;
    }
    return false;
  };

});
