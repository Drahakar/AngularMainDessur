angular.module('leChatApp')
  .service('chatService', function ($interval) {
    var chatService = this;
    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }


    
    chatService.messages = [
    	{
    		author: 'Andy',
    		message: 'Lol k. no joke ^_^',
    		isStared: false
    	},
    	{
    		author: 'Bob', 
    		message: 'Zis is funny',
    		isStared: false
    	}
    ];

    $interval(function() {
      chatService.messages.push({
        author: 'keepAlive', 
        message: makeid(),
        isStared: false
      });
    }
    , 10000);



    return chatService
  });