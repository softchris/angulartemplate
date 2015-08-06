(function(){
	'use strict';

	angular
		.module('application.repositories')	
		.factory('userRepository', UserRepository);

	UserRepository.$inject = [ '$http' ];

	function UserRepository($http){

	}

})();

