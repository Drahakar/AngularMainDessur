'use strict';

describe('Service: chatService', function () {

  beforeEach(module('leChatApp'));

  var httpBackend, chatService, interval;

  beforeEach(inject(function ($httpBackend, _chatService_, $interval) {
    chatService = _chatService_;
    httpBackend = $httpBackend;
    interval = $interval;
  }));

  afterEach(function(){
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });


  it('should be injected', function () {
    expect(chatService).toBeDefined();
  });

  it('should automaticaly fetch the latests messages', function() {
    spyOn(chatService, 'updateChat').and.returnValue('not important in that test');
    interval.flush(1000);
    expect(chatService.updateChat).toHaveBeenCalled();
  });

  describe('updateChat', function() {
    it('should call the right endpoint to get the messages', function() {
        var expectedMessages = [{username: 'test', message: 'message'}];
        httpBackend.expectGET('chat').respond(expectedMessages);

        chatService.updateChat();

        httpBackend.flush();
        expect(chatService.messages).toEqual(expectedMessages);
    });
  });

  describe('sendChat', function() {
    it('should call the right endpoint to send a message', function() {
        var message = 'This is a test';
        var defaultUser = 'Current User';
        httpBackend.expectPOST('chat', {username: defaultUser, message: message}).respond('sure');

        chatService.sendChat(message);

        httpBackend.flush();
    });
  });
});
