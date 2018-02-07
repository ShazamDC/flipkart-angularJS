app.controller("homectrl",function($scope,homefactory){
    var promise = homefactory.callServer();
    promise.then(function(data){
        $scope.data = data.data;
    },function(err){
        $scope.err = err;
    });
});