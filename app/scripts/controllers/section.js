'use strict';

guardianApp.controller('SectionCtrl', function($scope, AjaxCall, JsonCall, $rootScope, $routeParams, localStorageService) {

  var sectionQuery,
    localData,
    dateTime = new Date();

  if ($rootScope !== undefined) {
    sectionQuery = $rootScope.currentSection;
  } else {
    sectionQuery = 'football';
  }

  localData = localStorageService.get(sectionQuery);

  function compareTime() {

    var storedTime = new Date(localData.storedTime),
      timeDiff = Math.abs((storedTime - dateTime)),
      status = false;

    /*If statement seems fine*/
    if (localData.storedTime !== undefined && timeDiff > ($rootScope.timeDiff * 60000)) {
      return true;
    } else {
      return false;
    }
    /* COmes back as undefined if the statement above fails */
    return status;

  }

  function getData() {
    AjaxCall.get('query.php', {
      format: $rootScope.format,
      'show-fields': $rootScope.showfields,
      section: sectionQuery,
      callback: 'JSON_CALLBACK'
    }).then(function(response) {
      $scope.data = response.data.response;
console.log(response);
      for (var i = 0; i < $scope.data.results.length; i += 1) {
        if ($scope.data.results[i].fields.body !== undefined && $scope.data.results[i].fields.body.length > 100) {
          $scope.data.results[i].fullStory = 'true';
        }
      }

      $scope.data.storedTime = new Date();

      localStorageService.add(sectionQuery, $scope.data);

    });


  }
  /*
      Check if the local data exists, then check if the time limit
      has been exceeded. If it has, or not data exists, fetch new data.
    */
  if (localData) {

    if (!compareTime()) {
      $scope.data = localData;
    } else {
      getData();
    }
  } else {
    getData();
  }
});
