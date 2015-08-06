(function(){
	angular
		.module('application')
    	.config( Config );

	Config.$inject = ['$routeProvider','routes'];

	function Config($routeProvider, routes) {
		for( var r in routes ){
			var route = routes[r];
			$routeProvider.when(route.route, { templateUrl: route.template, controller: route.controller });
		};
	    
	    $routeProvider.otherwise({ redirectTo: routes.start.route });
	}	
})();

