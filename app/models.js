var models = angular.module('models');

models.factory('User',function(){
    function User(user){
        var me = this;
        me.username = user.name;
        me.age = user.age;
    }

    return User;
});
