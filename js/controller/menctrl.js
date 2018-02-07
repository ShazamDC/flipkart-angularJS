app.controller("menctrl",function($scope,menfactory,checkoutfac){
    var promise = menfactory.callServer();
    promise.then(function(data){
        menfactory.fillItems(data);
         },function(err){
        $scope.err = err;
    });
    $scope.data=menfactory.item;
    $scope.addToCart=(obj)=>{
        checkoutfac.add(obj);    
        }
});