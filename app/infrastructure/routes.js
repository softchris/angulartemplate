(function(){
	'use strict';

	var Routes = {
		"start" : {
			route :'/Start',
			template : 'features/start/start.html',
			controller : 'StartController'
		},
		"admin" : {
			route :'/Admin',
			template : 'features/admin/admin.html',
			controller : 'AdminController'
		},
		"about" : {
			route :'/About',
			template : 'features/about/about.html',
			controller : 'AboutController'
		},
		"login" : {
			route :'/Login',
			template : 'infrastructure/application/login/login.html',
			controller : 'LoginController'
		},
		"cv" : {
			route :'/CV',
			template : 'features/cv/cv.html',
			controller : 'CVController'
		},
		"friends" : {
			route :'/Friends',
			template : 'features/friends/friends.html',
			controller : 'FriendsController'
		}
	};

	angular
		.module('application')	
		.constant('routes', Routes );
	

})();
