'use strict';

angular.module('leChatApp')
  .controller('ChatCtrl', function ($scope) {
    $scope.chat = {
    	notVisibleMessages: 3,
    	messages: [
        {
          author: {
            imageUrl: 'http://lorempixel.com/640/480/cats?Genevieve.Moen',
            name: 'Genevieve.Moen'
          },
          message: 'This is a test',
          postId: 0
        },
        {
          author: {
            imageUrl: 'http://lorempixel.com/640/480/cats?Bob.Graton',
            name: 'Bob.Graton'
          },
          message: 'Yes',
          postId: 1
        },
        {
          author: {
            imageUrl: 'http://lorempixel.com/640/480/cats?Fake.Id',
            name: 'Fake.Id'
          },
          message: 'It is real',
          postId: 2
        }
      ]
    };
  });
