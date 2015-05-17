"uses strict";

angular.module('leChatApp')
  .service('chatService', function ($interval, $http) {
    var chatService = this;

    chatService.messages = [];

    $interval(function() {
    	chatService.updateChat();
	}, 1000);	
      

    chatService.updateChat = function() {
    	return $http.get('chat').then( function(results) {
    		return chatService.messages = results.data.reverse();
	    });
    };

    chatService.sendChat = function(chatMessage) {
    	return $http.post('chat', {username: 'Me', message: chatMessage});
    };


    return chatService;
  });