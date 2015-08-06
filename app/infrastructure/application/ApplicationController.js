(function(){
	'use strict';

	angular
		.module('application.controllers') 
		.controller('ApplicationController',ApplicationController );

	ApplicationController.$inject = [ '$scope','testService','$location' ];

	function ApplicationController($scope,testService,$location){
	    $scope.test = testService.getHello();
	    $scope.getSelected = getSelected;

	    function getSelected(path){
	        if($location.path() === path ){
	            return "active";
	        }
	        else{
	            return "";
	        }
	    }
	}
	
})();


