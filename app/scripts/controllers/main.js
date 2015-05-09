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

    $scope.chat.messages = chatService.messages;
  });
