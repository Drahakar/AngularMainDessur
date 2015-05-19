var express = require('express');
var router = express.Router();
var faker = require('faker'),
    connect = require('connect'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http'),
    crypto = require('crypto');

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var users = {};
var profile = {};

function getUser(username) {
  if (!users[username]) {
    users[username] = faker.helpers.createCard();
    users[username].name = username;
    users[username].username = username;
    users[username].email = username + '@gmail.com';
    users[username].image = faker.image.cats() + '?' + username;
  }

  return users[username];
}

/* GET users listing. */
router.get('/', function(req, res) {
});

router.get('/infoFast/:username', function(req, res) {

	if (getRandomArbitrary(0, 10) < 2) {
    	res.send(getUser(req.params.username));
	} else {
    	res.status(500);
		res.send('Yep, "flaky" is the word');
	}

});

router.get('/infoSlow/:username', function(req, res) {
  console.log('sending slow info');
	setTimeout(function () {
  		res.send(getUser(req.params.username));
	}, 5000)
})

router.get('/image/:username', function(req, res) {
     res.send(getUser(req.params.username).image);
})

router.get('/profile', function(req, res) {
  res.send(profile);
});

router.post('/profile', function(req, res) {
  profile = req.body;
  res.send('Success');
});


module.exports = router;
