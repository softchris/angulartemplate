(function(){
	'use strict';

	angular
		.module('application.services')
		.factory('testService', TestService );

	function TestService(){
	    return {
	        getHello : getHello
	    };

	    function getHello(){
	        return "hello";
	    }
	}

})();


