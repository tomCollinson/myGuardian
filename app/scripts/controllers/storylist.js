'use strict';

angular.module('guardianApp')
  .controller('StorylistCtrl', function($scope, AjaxCall) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    AjaxCall.get({
      section: ''
    })
  });
