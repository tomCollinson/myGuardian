'use strict';

angular.module('guardianApp')
  .controller('SectionCtrl', function($scope, AjaxCall, JsonCall,$rootScope, $routeParams, localStorageService) {

    var sectionQuery,
      localData,
      dateTime = new Date(),
      storedTime;
      
    if ($rootScope !== undefined) {
      sectionQuery = $rootScope.currentSection;
    }else {
      sectionQuery = 'football';
    }

    localData = localStorageService.get(sectionQuery);

    var compareTime = function() {
      storedTime = new Date(localData.storedTime);
      console.log('blah');
      timeDiff = (storedTime - dateTime);

      if (timeDiff >= ($rootScope.storageTime * 6000)) {
        return true
      }

    }

    if (localData !== null && compareTime) {
      $scope.data = localStorageService.get(sectionQuery);

    } else {

      AjaxCall.get('http://content.guardianapis.com/search', {
        format: $rootScope.format,
        'api-key': $rootScope.key,
        'show-fields': $rootScope.showfields,
        section: sectionQuery,
        callback: 'JSON_CALLBACK'
      }).then(function(response) {
        $scope.data = response.data.response.results;

        for (var i = 0; i < $scope.data.length; i += 1) {
          if ($scope.data[i].fields.body.length > 100) {
            $scope.data[i].fullStory = "true";
          }
        }

        $scope.data.storedTime = new Date();

        localStorageService.add(sectionQuery, $scope.data);
      })

    }
  });
