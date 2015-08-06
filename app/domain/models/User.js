(function(){
	'use strict';

	angular
		.module('application.models')
		.factory('User',UserModel );	

	function UserModel(){
	    function User(user){
	        var me = this;
	        me.username = user.name;
	        me.age = user.age;
	    }

	    return User;
	}
})();



