angular.module('leChatApp')
  .service('chatService', function ($interval, $http) {
    var chatService = this;

    chatService.messages = [];

    $interval(function() {
    	$http.get('chat').then( function(results) {
    		chatService.messages = results.data.reverse();
	    });
	}, 1000);	
      

    chatService.sendChat = function(chatMessage) {
    	return $http.post('chat', {username: 'TEST', message: chatMessage});
    };


    return chatService
  });