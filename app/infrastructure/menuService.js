(function(){
	'use strict';

	angular
		.module('application.services')
		.factory('menuService', MenuService );

	function MenuService(){
		return {
			getItems : getItems
		};

		function getItems(){
			var states = [ 'Start','Admin','About','CV', 'Friends' ];
			var items = [];

			states.forEach(function(state){
				items.push({
					state : state,
					route : '/' + state,
					href : '/#' + state
				});
			});

			return items;
		}
	}
})();