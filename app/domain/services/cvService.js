(function(){
	'use strict';

	angular
		.module('application.services')
		.factory('cvService', CvService)

	CvService.$inject = [ '$http' ];

	function CvService( $http ){
		var baseUrl = 'http://localhost:8000/';

		return {
			get : get
		};

		function get(){
			return $http.get( baseUrl + 'data/cv.json' );
		}
	}
})();