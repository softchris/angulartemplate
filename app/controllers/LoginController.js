controllers.controller('LoginController',['$scope','loginService','$location',function($scope,loginService,$location){
    $scope.username="";
    $scope.password="";
    $scope.errorMessage=" Something wrong with your user credentials";
    $scope.showError = false;

    $scope.login = function(){
        if(loginService.login($scope.username,$scope.password)){
            $location.path("/Start");
        }
        else{
            $scope.showError = true;
        }
    };
}]);

