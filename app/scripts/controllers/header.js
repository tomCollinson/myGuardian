'use strict';

guardianApp.controller('HeaderCtrl', function($scope, $location, $route, $rootScope, $element) {

  $scope.navClass = function(page) {
    var currentRoute = $location.path().substring(1) || 'section/football';
    return page === currentRoute ? 'active' : '';
  };

  $scope.title = function(pageTitle) {
    if (pageTitle === undefined) {
      $scope.pageTitle = 'All Football';
    } else {
      $scope.pageTitle = pageTitle;
    }
  }

});
