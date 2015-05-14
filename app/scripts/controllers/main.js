'use strict';

/**
 * @ngdoc function
 * @name leChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leChatApp
 */
angular.module('leChatApp')
  .controller('MainCtrl', function ($scope, chatService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.chat = {};
    $scope.chatInput = '';

    $scope.submit = function() {
		chatService.sendChat($scope.chatInput)
		.then(chatService.updateChat)
		.then(function() {
			$scope.chatInput = '';
		});
    };

    function updateChat() {
    	$scope.chat.message = chatService.messages;
    }

    $scope.$watch(function () { return chatService.messages; }, function (newVal) {
	    $scope.chat.messages = newVal;
	});

    $scope.chat.messages = chatService.messages;
  });
