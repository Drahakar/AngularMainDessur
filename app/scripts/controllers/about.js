'use strict';

/**
 * @ngdoc function
 * @name leChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the leChatApp
 */
angular.module('leChatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
