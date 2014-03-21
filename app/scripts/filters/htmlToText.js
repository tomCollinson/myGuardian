'use strict';

guardianApp.filter('htmlToText', function() {
  return function(text) {
    return String(text).replace(/<[^>]+>/gm, '');
  };
});
