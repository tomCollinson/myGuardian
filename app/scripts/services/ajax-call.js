guardianApp.factory('AjaxCall', function($http){
    return {
        get : function(params){
            return $http.jsonp('http://content.guardianapis.com/search', {
                params : params
            });
        }
    }
});
