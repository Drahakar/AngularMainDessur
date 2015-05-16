'use strict';

angular.module('leChatApp')
  .controller('ProfileCtrl', function ($scope, userService) {

  	$scope.saveProfile = function() {
		if($scope.profileForm.$invalid) {
			return;
		}

		userService.saveProfile($scope.user);
  	};

  	userService.getCurrentUserProfile().then(function(userInfo) {
  		$scope.user = userInfo;
  	});
  });
