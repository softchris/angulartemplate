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
