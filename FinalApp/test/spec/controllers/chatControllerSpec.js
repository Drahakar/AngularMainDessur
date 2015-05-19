'use strict';

describe('Controller: chatController', function () {

  // load the controller's module
  beforeEach(module('leChatApp'));

  var scope;
  var mockChatService;
  var chatController;

  function messageBuilder(author, messages) {
    return {
              author: author,
              message: messages
          };
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {

    //Prepare the fake service
    mockChatService = {
      messagesToReturn: [],
      sentMessage: '',
      messages: [],
      updateChat: function() {
        var deferred = $q.defer();
        deferred.resolve(mockChatService.messagesToReturn);
        mockChatService.messages = mockChatService.messagesToReturn;
        return deferred.promise;
      },
      sendChat: function(message) {
        var deferred = $q.defer();
        deferred.resolve();
        mockChatService.sentMessage = message;
        return deferred.promise;
      }
    };
    spyOn(mockChatService, 'updateChat').and.callThrough();
    spyOn(mockChatService, 'sendChat').and.callThrough();

    scope = $rootScope.$new();

    //The form
    scope.chatInputForm = {};
    scope.chatInputForm.$invalid = false;

    chatController = $controller('ChatCtrl', {
      $scope: scope,
      chatService: mockChatService
    });

    scope.$digest();
  }));

  it('should call updateChat when created', function () {
    expect(mockChatService.updateChat).toHaveBeenCalled();
  });

  it('should set the chat with the latest messages', function() {
    var messages = [messageBuilder('test', 'test')];
    mockChatService.messagesToReturn = messages;
    scope.updateChat();
    scope.$digest();
    expect(scope.chat.messages).toBe(messages);
  });

  it('should send the expected message unmodified', function() {
      scope.chatInput = 'test';
      scope.submit();
      expect(mockChatService.sentMessage).toBe('test');
  });

  it('should not send the message if the form is invalid', function() {
    scope.chatInputForm.$invalid = true;
    scope.chatInput = 'test';
    scope.submit();
    expect(mockChatService.sendChat).not.toHaveBeenCalled();
  });

  it('should reset the notVisibleMessages when updating the chat', function() {
    var messages = [messageBuilder('test', 'test')];
    mockChatService.messages = messages;
    mockChatService.updateChat();
    scope.$digest();
    expect(scope.chat.notVisibleMessages).toBe(0);
  });

  it('should update the notVisibleMessages as new Messages are received', function() {
    var messages = [messageBuilder('test', 'test')];
    mockChatService.messages = messages;
    scope.$digest();
    expect(scope.chat.notVisibleMessages).toBe(1);
  });

});
