app.controller("womenctrl",function($scope,womenfactory,checkoutfac){
    var promise = womenfactory.callServer();
    promise.then(function(data){
        womenfactory.fillItems(data);
         },function(err){
        $scope.err = err;
    });
    $scope.data=womenfactory.item;
    $scope.addToCart=(obj)=>{
    checkoutfac.add(obj);    
    }
});