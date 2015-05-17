'use strict';

angular.module('leChatApp')
  .controller('MainCtrl', function ($scope, chatService) {
    $scope.chat = {
    	notVisibleMessages: 0,
    	messages: []
    };

    $scope.chatInput = '';

    $scope.submit = function() {
      if ($scope.chatInputForm.$invalid) {
        return;
      }

  		chatService.sendChat($scope.chatInput)
    		.then($scope.updateChat)
    		.then(function() {
    			$scope.chatInput = '';
    		});
    };

    $scope.updateChat = function() {
    	chatService.updateChat().then(function() {
    		$scope.chat.messages = chatService.messages;
    		$scope.chat.notVisibleMessages = 0;	
    	});    	
    };

    $scope.$watch(function () { return chatService.messages; }, function (newVal) {
    	$scope.chat.notVisibleMessages = newVal.length - $scope.chat.messages.length;
	});

    $scope.updateChat();
  });
