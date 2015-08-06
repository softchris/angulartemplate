(function(){
	'use strict';

	angular
		.module('application.services')
		.factory('alertService',AlertService );

	function AlertService(){
		return {
			showAlert : showAlert
		};

		function showAlert(){

		}
	}
})();
