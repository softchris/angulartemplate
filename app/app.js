angular.module('controllers',[]);
angular.module('repositories',['ngResource']);
angular.module('models',[]);
angular.module('services',[]);

angular.module('application', ['controllers','repositories','models','services','directives'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/Start', { templateUrl: 'html/start.html', controller: 'StartController' });
        $routeProvider.when('/Admin', { templateUrl: 'html/admin.html', controller: 'AdminController' });
        $routeProvider.when('/About', { templateUrl: 'html/about.html', controller: 'AboutController' });
        $routeProvider.when('/Login', { templateUrl: 'html/login.html', controller: 'LoginController' });
        $routeProvider.when('/CV', { templateUrl: 'html/cv.html', controller: 'CvController' });

        $routeProvider.otherwise({ redirectTo: '/Start' });
    }]);
