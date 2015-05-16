'use strict';

angular.module('leChatApp')
  .controller('UserCtrl', function ($scope, $routeParams, userService) {
  	$scope.$watch(function() {return userService.status}, function(status)  {
  		$scope.status = status;
  	});

  	userService.getUserProfile($routeParams.username).then(function(userInfo) {
  		$scope.user = userInfo;
  	});
  });
