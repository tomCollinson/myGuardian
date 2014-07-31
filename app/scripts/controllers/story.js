'use strict';

guardianApp.controller('StoryCtrl', function($scope, AjaxCall, $routeParams, $rootScope) {

  function getData(){
  
    $scope.refreshOn = false;
  
    AjaxCall.get('query.php?' + $routeParams.id + "?", {
      format: $rootScope.format,
      type: 'story',
      'show-fields': $rootScope.showfields,
      callback: 'JSON_CALLBACK'
    }).then(function(response) {
      $scope.data = response.data.response.content;
      
      if ($scope.data.fields.liveBloggingNow === 'true') {
          $scope.refreshOn = true;
          refreshData();
      }
      
    });
  
  }
  
  function refreshData() {
    if ($scope.refreshOn === true) {
      setTimeout(function(){
        getData();
      },60000)
    }
  }
  
  
  getData();
  
  
});
