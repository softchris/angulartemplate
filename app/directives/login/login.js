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
            templateUrl: '/html/directiveLogin.html',
            scope: {

            },
            link: function (scope, element, attrs) {
                scope.loginService = loginService;
                scope.user = loginService.currentUser;

                scope.login = function(){
                    $location.path("/Login");
                };

                scope.logout = function(){
                    loginService.logout();
                };
            }
        }
    }

})();
