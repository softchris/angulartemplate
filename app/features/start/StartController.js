(function(){
	'use strict';
	angular
		.module('application.controllers')
		.controller('StartController', StartController )

	StartController.$inject = [ '$scope'];

	function StartController($scope){
		$scope.title = 'Start';
	}

})();





