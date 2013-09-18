var services = angular.module('services');

services.factory('testService',function(){
   return {
      getHello : function(){
          return "hello";
      }
   }
});
