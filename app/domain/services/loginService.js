(function(){
    'use strict';
    angular
        .module('application.services')
        .factory('loginService', LoginService);

    LoginService.$inject = ['User'];

    function LoginService(User){
        return {
            currentUser : null,
            login : login,
            logout : logout,
            isLoggedIn : isLoggedIn
        };

        function login(username,password){
            var retval = false;
            var jsonUser = '{"username": "pelle", "age":23}';
            var user = angular.fromJson(jsonUser);
            if (username == user.username && password == "password"){
                this.currentUser = new User(user);
                retval = true;
            }

            return retval;
        }

        function logout(){
            this.currentUser = null;
        }

        function isLoggedIn(){
            return this.currentUser != null;
        }
    }

})();

