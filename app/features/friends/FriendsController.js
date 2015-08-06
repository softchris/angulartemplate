(function(){
	'use strict';
	angular
		.module('application.controllers')
		.controller('FriendsController', FriendsController )

	FriendsController.$inject = [ '$scope'];

	function FriendsController($scope){
		$scope.friends = [{ name : "pelle", age: 11, birth : new Date()}, { name : "lisa", age: 13, birth : new Date() }];
	}

})();





