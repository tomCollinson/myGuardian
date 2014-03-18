'use strict';

angular.module('guardianApp')
  .controller('StoryCtrl', function ($scope, AjaxCall, $routeParams, $rootScope) {
    console.log($routeParams.section);
    AjaxCall.get('http://content.guardianapis.com/' + $routeParams.id, {
      format: $rootScope.format,
      'show-fields': $rootScope.showfields,
      'api-key' : $rootScope.key,
      callback: 'JSON_CALLBACK'
    }).then(function(response){
      $scope.data = response.data.response.content;
      console.log($scope.data);
    })
  });
