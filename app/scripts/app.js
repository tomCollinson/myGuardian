
'use strict';

var guardianApp = angular.module('guardianApp', ['ngRoute']);

guardianApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/section/:sectionName', {
    templateUrl: 'views/section.html',
    controller: 'SectionCtrl'
  })
}]);

  guardianApp.run(function($rootScope) {
      $rootScope.queryString = 'format=json&show-fields=all&api-key=sax7qx28cef235apyedq3v3v&'
  })

