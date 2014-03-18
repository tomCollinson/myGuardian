'use strict';

angular.module('guardianApp')
  .controller('SectionCtrl', function ($scope, AjaxCall, $rootScope, $routeParams) {
  
    var sectionQuery;
    
    if ($routeParams.sectionRefined !== undefined) {
      sectionQuery = $routeParams.sectionName + '/' + $routeParams.sectionRefined;
    } else {
      sectionQuery = $routeParams.sectionName;
    }
    console.log(sectionQuery);
    
    AjaxCall.get('http://content.guardianapis.com/search',{
      format: $rootScope.format,
      'api-key': $rootScope.key,
      'show-fields': $rootScope.showfields,
      section: sectionQuery,
      callback: 'JSON_CALLBACK'
    }).then(function(response){
      $scope.data = response.data.response.results;
      
      for (var i =0; i < $scope.data.length; i +=1){
        if ($scope.data[i].fields.body.length > 100) {
          $scope.data[i].fullStory = "true";
        }
      }
      console.log($scope.data);
    })
  });

