'use strict';

angular.module('leChatApp')
  .controller('ProfileCtrl', function ($scope, userService) {

  	$scope.saveProfile = function() {
  		if($scope.profileForm.$invalid) {
  			return;
  		}

      userService.saveCurrentUserProfile($scope.user).then(function() {
        $scope.status = "Profile saved.";
      });
  	};

  	userService.getCurrentUserProfile().then(function(userInfo) {
  		$scope.user = userInfo;
  	});
  });
