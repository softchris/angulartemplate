(function(){
	'use strict';

	angular
		.module('application.directives')
		.directive('menu', Menu);

	function Menu(){
		return {
			restrict : 'E',
			replace: true,
			controller : Controller,
			scope : true,
			templateUrl : 'directives/menu/menu.html'
		}
	}

	Controller.$inject = ['$scope', 'menuService' ];

	function Controller($scope,menuService){
		$scope.items = menuService.getItems();
	}
})();