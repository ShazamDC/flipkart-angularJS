app.controller("electronicsctrl",function($scope,electronicsfactory,checkoutfac){
    var promise = electronicsfactory.callServer();
    promise.then(function(data){
        electronicsfactory.fillItems(data);
         },function(err){
        $scope.err = err;
    });
    $scope.data=electronicsfactory.item;
    $scope.addToCart=(obj)=>{
        checkoutfac.add(obj);    
        }
});