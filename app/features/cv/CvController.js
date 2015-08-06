(function(){
	'use strict';
	angular
		.module('application.controllers')
		.controller('CVController', CvController )

	CvController.$inject = [ '$scope', 'cvService'];

	function CvController($scope, cvService){
		cvService.get().then(function(result){
			$scope.cv = angular.fromJson(result.data);
		})	
	}

})();


