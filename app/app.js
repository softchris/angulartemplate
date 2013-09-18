angular.module('controllers',[]);
angular.module('repositories',['ngResource']);
angular.module('models',[]);
angular.module('services',[]);
angular.module('directives',[]);

angular.module('application', ['controllers','repositories','models','services','directives'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/Start', { templateUrl: 'html/start.html', controller: 'StartController' });
        $routeProvider.when('/Admin', { templateUrl: 'html/admin.html', controller: 'AdminController' });

        $routeProvider.otherwise({ redirectTo: '/Start' });
    }]);
