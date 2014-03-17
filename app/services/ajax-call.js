module.factory('AjaxCall', function($http){
    return {
        get : function(params){
            return $http.get('url/to/widget/data', {
                params : params
            });
        }
    }
});
