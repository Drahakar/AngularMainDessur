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
});

router.get('/infoFast/:username', function(req, res) {

	if (getRandomArbitrary(0, 10) < 2) {
    	res.send(faker.helpers.createCard());
	} else {
    	res.status(500);
		res.send('Yep, "flaky" is the word');
	}

});

router.get('/infoSlow/:username', function(req, res) {
  console.log('sending slow info');
	setTimeout(function () {
  		res.send(faker.helpers.createCard());
	}, 5000)
})

router.get('/image/:username', function(req, res) {
	//res.writeHead(200, {'Content-Type': 'text/plain' });
     res.send(faker.image.cats() + '?' + req.params.username);
})

module.exports = router;
