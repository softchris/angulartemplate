(function(){
	'use strict';
	angular
		.module('application.controllers')
		.controller('CVController', CvController )

	CvController.$inject = [ '$scope'];

	function CvController($scope){
		$scope.test = 'cv';	
	}

})();


