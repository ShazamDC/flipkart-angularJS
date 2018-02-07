app.controller("tvctrl",function($scope,tvfactory,checkoutfac){
    var promise = tvfactory.callServer();
    promise.then(function(data){
        tvfactory.fillItems(data);
    },function(err){
        $scope.err = err;
    });
    $scope.data=tvfactory.item;
    $scope.addToCart=(obj)=>{
        checkoutfac.add(obj);    
        }
});