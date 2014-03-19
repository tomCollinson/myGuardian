'use strict';

angular.module('guardianApp')
  .controller('SectionCtrl', function($scope, AjaxCall, $rootScope, $routeParams, localStorageService) {

    var sectionQuery,
      localData,
      dateTime = new Date(),
      storedTime;

    if ($routeParams.sectionRefined !== undefined) {
      sectionQuery = $routeParams.sectionName + '/' + $routeParams.sectionRefined;
    } else {
      sectionQuery = $routeParams.sectionName;
    }

    localData = localStorageService.get(sectionQuery);

    var compareTime = function() {
      storedTime = new Date(localData.storedTime);
      console.log('blah');
      timeDiff = (storedTime - dateTime);

      if (timeDiff >= ($rootScope.storageTime * 6000)) {
        console.log('Time difference is greater than rootScope setting');
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
