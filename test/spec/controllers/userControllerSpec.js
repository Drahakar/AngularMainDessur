'use strict';

describe('Controller: UserController', function () {

  // load the controller's module
  beforeEach(module('leChatApp'));

  var scope;
  var mockUserService;
  var userController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {

    //Prepare the fake service
    mockUserService = {
      getUserProfile: function() {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
      },
    };
    spyOn(mockUserService, 'getUserProfile').and.callThrough();

    scope = $rootScope.$new();

    userController = $controller('UserCtrl', {
      $scope: scope,
      userService: mockUserService
    });

    scope.$digest();
  }));

  it('should call getUserProfile when created', function () {
    expect(mockUserService.getUserProfile).toHaveBeenCalled();
  });
});
