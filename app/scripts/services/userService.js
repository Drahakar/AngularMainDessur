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

    userService.getCurrentUserProfile = function() {
    	return $http.get('users/profile')
    	.then(function(profileInfo) {
    		return profileInfo.data;
    	})
    }

    userService.saveCurrentUserProfile = function(user) {
        return $http.post('users/profile', user);
    }

    return userService;
  });