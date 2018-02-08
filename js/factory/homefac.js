app.factory("homefactory",function($http,$q){
    var object = {
        callServer(){
            var defer = $q.defer();
            $http.get("https://github.com/ShazamDC/flipkart-angularJS/blob/master/home.json").then(function(data){
                defer.resolve(data);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})
