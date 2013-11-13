var controllers = angular.module('controllers');

controllers.controller('FriendsController',['$scope',function($scope){
    $scope.friends = [{ name : "pelle", age: 11, birth : new Date()}, { name : "lisa", age: 13, birth : new Date() }];
}]);
