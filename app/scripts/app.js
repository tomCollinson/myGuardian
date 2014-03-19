'use strict';

var guardianApp = angular.module('guardianApp', ['ngRoute', 'LocalStorageModule']);

guardianApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/section.html',
        controller: 'SectionCtrl',
      })
      .when('/story/:id*', {
        templateUrl: 'views/story.html',
        controller: 'StoryCtrl'
      })
      .when('/section/:sectionName', {
        templateUrl: 'views/section.html',
        controller: 'SectionCtrl'
      })
      .when('/section/:sectionName/:sectionRefined', {
        templateUrl: 'views/section.html',
        controller: 'SectionCtrl'
      })

  }
]);

guardianApp.run(function($rootScope) {
  $rootScope.key = 'sax7qx28cef235apyedq3v3v';
  $rootScope.showfields = 'all';
  $rootScope.format = 'json';
  $rootScope.timeDiff = '5';
});
