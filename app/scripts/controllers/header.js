'use strict';

guardianApp.controller('HeaderCtrl', function($scope, $location, $route) {

  $scope.navClass = function(page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };

});
