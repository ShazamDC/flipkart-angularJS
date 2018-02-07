app.controller("flipcartctrl",function($scope){
    $scope.sortOptions=false;
   $scope.showSortOptions=()=>{
    $scope.sortOptions=false;
}
$scope.UnshowSortOptions=()=>{
    $scope.sortOptions=true;
}

});