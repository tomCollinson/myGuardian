'use strict';

guardianApp.filter('htmlToText', function() {
  return function(text) {
    return String(text).replace(/<[^>]+>/gm, '');
  };
});

guardianApp.filter('textToHtml', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
});
