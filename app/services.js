var services = angular.module('services');

services.factory('testService',function(){
   return {
      getHello : function(){
          return "hello";
      }
   }
});

services.factory('loginService',function(User){
    return {
        currentUser : null,
        login : function(username,password){
            var retval = false;
            var jsonUser = '{"username": "pelle", "age":23}';
            var user = angular.fromJson(jsonUser);
            if (username == user.username && password == "password"){
                this.currentUser = new User(user);
                retval = true;
            }

            return retval;
        },
        logout : function(){
            this.currentUser = null;
        },
        isLoggedIn : function(){
            return this.currentUser != null;
        }
    }
});

services.factory('alertService',function(){

});
