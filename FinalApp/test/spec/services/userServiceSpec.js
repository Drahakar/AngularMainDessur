'use strict';

describe('Service: userService', function () {

  beforeEach(module('leChatApp'));

  var httpBackend, userService;

  beforeEach(inject(function ($httpBackend, _userService_) {
  	userService = _userService_;
  	httpBackend = $httpBackend;
  }));

  afterEach(function(){
  	httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });


  it('should be injected', function () {
    expect(userService).toBeDefined();
  });

  describe('getCurrentUserProfile', function() {
  	it('should call the right endpoint to get the profile', function() {
		httpBackend.expectGET('users/profile').respond({whatever: 'ok'});

		userService.getCurrentUserProfile();

		httpBackend.flush();
  	});
  });

  describe('saveCurrentUserProfile', function() {
  	it('should call the right endpoint to save the profile', function() {
  		var userProfile = {username: 'test', address: '1234 test st'};
		httpBackend.expectPOST('users/profile').respond(userProfile);

		userService.saveCurrentUserProfile(userProfile);

		httpBackend.flush();
  	});
  });

  describe('getUserProfile', function() {
	it('should first call the fast but crapy service', function() {
		var username = 'test';
		httpBackend.expectGET('users/infoFast/' + username).respond({whatever: 'ok'});

		userService.getUserProfile(username);

		httpBackend.flush();
	});

	it('should call the slow service when the fast one fails', function() {
		var username = 'test';
		httpBackend.expectGET('users/infoFast/' + username).respond(500, 'nothing');
		httpBackend.expectGET('users/infoSlow/' + username).respond({sup: 'yeah'});

		userService.getUserProfile(username);

		httpBackend.flush();
	});

	it('should unset the status when the fast service returns', function() {
		var username = 'test';
		httpBackend.expectGET('users/infoFast/' + username).respond({whatever: 'ok'});

		userService.getUserProfile(username);
		
		httpBackend.flush();

		expect(userService.status).toBeUndefined();
	});

	it('should unset the status when the fast service calls returns', function() {
		var username = 'test';
		httpBackend.expectGET('users/infoFast/' + username).respond(500, 'nothing');
		httpBackend.expectGET('users/infoSlow/' + username).respond(500, 'nothing');

		userService.getUserProfile(username);

		httpBackend.flush();

		expect(userService.status).toBeUndefined();
	});

  });
});
