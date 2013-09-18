var controllers = angular.module('controllers');
controllers.controller('ApplicationController',['$scope','testService',function($scope,testService){
    $scope.test = testService.getHello();
}]);

controllers.controller('AdminController',['$scope','testService',function($scope,testService){
    $scope.test = testService.getHello();
}]);

