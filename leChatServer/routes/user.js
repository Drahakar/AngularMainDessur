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

/* GET users listing. */
router.get('/', function(req, res) {
  	res.send('respond with a resource');
});

router.get('/imageFast', function(req, res) {

	if (getRandomArbitrary(0, 10) < 2) {
    	res.send(faker.internet.avatar());
	} else {
    	res.status(500);
		res.send('Yep, "flaky" is the word');
	}

});

router.get('/imageSlow', function(req, res) {
	setTimeout(function () {
  		res.send(faker.internet.avatar());
	}, 5000)
})

module.exports = router;
