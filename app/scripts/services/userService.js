"uses strict";

angular.module('leChatApp')
  .service('userService', function ($http) {
    var userService = this;

    userService.getUserProfile = function(userName) {
    	return $http.get('users/infoFast/'+ userName)
    	.catch(function() {
    		return $http.get('users/infoSlow/' + userName)
    	})
    	.then(function(userInfo) {
	    	return userInfo.data;
	    }).finally(function() {
    		userService.status = undefined;
	    });
    };

    return userService;
  });