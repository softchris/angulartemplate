(function(){
    'use strict';
    angular
        .module('application.directives')
        .directive('login', Login );

    Login.$inject = [ 'loginService','$location' ];

    function Login( loginService,$location ){
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
                scope.logout = logout;
                scope.login = login;

                function login(){
                    $location.path("/Login");
                }

                function logout(){
                    loginService.logout();
                }
            }
        }
    }

})();
