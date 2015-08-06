(function(){
    'use strict';
    angular
        .module('application.controllers')
        .controller('LoginController' , LoginController);

    LoginController.$inject = [ '$scope','loginService','$location','routes'];

    function LoginController($scope,loginService,$location, routes){
        $scope.username="";
        $scope.password="";
        $scope.errorMessage=" Something wrong with your user credentials";
        $scope.showError = false;

        $scope.login = login;

        function login(){
            if(loginService.login($scope.username,$scope.password)){
                $location.path(routes.start.route);
            }
            else{
                $scope.showError = true;
            }
        }
    }

})();


