(function(){
    'use strict';
    angular
        .module('application.directives')
        .directive('login', ['loginService','$location']);

    Login.$inject = [ 'loginService','$location','routes' ];

    function Login(loginService,$location, routes){
        return {
            restrict: "E",
            transclude: true,
            replace: true,
            templateUrl: '/directives/login/login.html',
            scope: {

            },
            link: function (scope, element, attrs) {
                scope.loginService = loginService;
                scope.user = loginService.currentUser;

                scope.login = function(){
                    $location.path( routes.login.route );
                };

                scope.logout = function(){
                    loginService.logout();
                };
            }
        }
    }

})();
