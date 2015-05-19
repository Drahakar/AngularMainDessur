'use strict';

describe('Controller: chatController', function () {

  // load the controller's module
  beforeEach(module('leChatApp'));

  var scope;
  var chatController;

  function messageBuilder(author, messages) {
    return {
              author: author,
              message: messages
          };
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {

    scope = $rootScope.$new();

    //The form
    scope.chatInputForm = {};
    scope.chatInputForm.$invalid = false;

    chatController = $controller('ChatCtrl', {
      $scope: scope
    });

    scope.$digest();
  }));

  it('should have basic variables defined', function () {
    expect(scope.chat).toBeDefined();
    expect(scope.chat.messages).toBeDefined();
    expect(scope.chat.messages.length).toBe(3);
  });

});
