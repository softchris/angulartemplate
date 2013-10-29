var controllers = angular.module('controllers');
controllers.controller('ApplicationController',['$scope','testService','$location',function($scope,testService,$location){
    $scope.test = testService.getHello();
    $scope.getSelected = function(path){
        if($location.path() == path ){
            return "active";
        }
        else
            return "";
    }

}]);

controllers.controller('AdminController',['$scope','testService',function($scope,testService){
    $scope.test = testService.getHello();
}]);

controllers.controller('StartController',['$scope',function($scope){

}]);

controllers.controller('AboutController',['$scope',function($scope){

}]);

controllers.controller('CvController',['$scope',function($scope){
    $scope.test = "test";
}]);

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

