angular.module('application.controllers',[]);
angular.module('application.repositories',[]);
angular.module('application.models',[]);
angular.module('application.services',[]);
angular.module('application.directives',[]);

angular.module('application', [
	'application.controllers',
	'application.repositories',
	'application.models',
	'application.services',
	'application.directives',
	'ngRoute'
]);