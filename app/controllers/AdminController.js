var controllers = angular.module('controllers');

controllers.controller('AdminController',['$scope','testService',function($scope,testService){
    $scope.test = testService.getHello();
}]);

