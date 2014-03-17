'use strict';

angular.module('guardianApp')
  .controller('SectionCtrl', function ($scope, AjaxCall, $rootScope, $routeParams) {
    
    AjaxCall.get({
    format: $rootScope.queryString,
      section: 'sport/' + $routeParams.sectionName,
      callback: 'JSON_CALLBACK'
    }).then(function(response){
      $scope.data = response.data.response.results;
      console.log($scope.data);
    })
  });
