'use strict';

xdescribe('Controller: profileController', function () {

  // load the controller's module
  beforeEach(module('leChatApp'));

  var scope;
  var mockUserService;
  var profileController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {

    //Prepare the fake service
    mockUserService = {
      sentProfile: {},
      getCurrentUserProfile: function() {
        var deferred = $q.defer();
        deferred.resolve({name: 'test', address: '123 fake street'});
        return deferred.promise;
      },
      saveCurrentUserProfile: function(userProfile) {
        var deferred = $q.defer();
        mockUserService.sentProfile = userProfile;
        deferred.resolve();
        return deferred.promise;
      }
    };
    spyOn(mockUserService, 'getCurrentUserProfile').and.callThrough();
    spyOn(mockUserService, 'saveCurrentUserProfile').and.callThrough();

    scope = $rootScope.$new();

    //The form
    scope.profileForm = {};
    scope.profileForm.$invalid = false;

    profileController = $controller('ProfileCtrl', {
      $scope: scope,
      userService: mockUserService
    });

    scope.$digest();
  }));

  it('should call getCurrentUserProfile when created', function () {
    expect(mockUserService.getCurrentUserProfile).toHaveBeenCalled();
  });

  it('should send the expected profile unmodified', function() {
    var profile = {username: 'test', address: '1234 hello'};
    scope.user = angular.copy(profile);
    scope.saveProfile();
    expect(mockUserService.sentProfile).toEqual(profile);
  });

  it('should not send the profile if the form is invalid', function() {
    scope.profileForm.$invalid = true;
    scope.user = {username: 'test', address: '1234 hello'};
    scope.saveProfile();
    expect(mockUserService.saveCurrentUserProfile).not.toHaveBeenCalled();
  });
});
