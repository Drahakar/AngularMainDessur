'use strict';

angular.module('leChatApp')
  .service('chatService', function ($interval, $http) {
    var chatService = this;

    chatService.messages = [];

    $interval(function() {
    	chatService.updateChat();
	}, 1000);	
      

    chatService.updateChat = function() {
    	return $http.get('chat').then( function(results) {
    		chatService.messages = results.data.reverse();
            return chatService.messages;
	    });
    };

    chatService.sendChat = function(chatMessage) {
    	return $http.post('chat', {username: 'Current User', message: chatMessage});
    };


    return chatService;
  });