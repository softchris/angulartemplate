(function(){
	'use strict';
	angular
		.module('application.controllers')
		.controller('AdminController', AdminController )

	AdminController.$inject = [ '$scope','testService' ];

	function AdminController( $scope, testService ){
		$scope.test = testService.getHello();	
	}

})();


