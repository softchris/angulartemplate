(function(){
	'use strict';
	angular
		.module('application.controllers')
		.controller('CVController', CvController )

	CvController.$inject = [ '$scope'];

	function CvController($scope){
		$scope.cv = {
			name : 'Chris',
			jobs : [
			{
				name : 'Softhouse',
				from : '201208',
				to : 'present'
			}
			],
			contracts : [],
			skills : [ 'angular','.net', 'javascript', 'c#' ]

		};	
	}

})();


