'use strict';

/**
 * @ngdoc overview
 * @name leChatApp
 * @description
 * # leChatApp
 *
 * Main module of the application.
 */
angular
  .module('leChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/user/:username', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'  
      })
      .otherwise({
        redirectTo: '/'
      });
  });
