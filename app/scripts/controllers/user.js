'use strict';

/**
 * @ngdoc function
 * @name leChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the leChatApp
 */
angular.module('leChatApp')
  .controller('UserCtrl', function ($scope, userService) {
  	$scope.$watch(function() {return userService.status}, function(status)  {
  		$scope.status = status;
  	});

  	userService.getUserProfile('test').then(function(userInfo) {
  		$scope.user = userInfo;
  	});
  });
