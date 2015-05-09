var express = require('express');
var router = express.Router();
var faker = require('faker');

var chatGenerator;

var chatLogs = [];
var id = 0;

var generateChat = function() {
  var randomUser = faker.helpers.createCard();
  chatLogs.push({
        postId: ++id + new Date(), //probably not thread safe...
        author: {
          name: randomUser.username,
          imageUrl: faker.image.cats() + '?' + randomUser.username
        },
        message: randomUser.company.catchPhrase
      });
};

/* GET users listing. */
router.get('/', function(req, res) {
  if(!chatGenerator) {
    chatGenerator = setInterval(generateChat, 5000);
  }
  res.send(chatLogs);
  
});

router.post('/', function(req, res) {
   chatLogs.push({
        postId: ++id + new Date(), //probably not thread safe...
        author: {
          name: req.body.username,
          imageUrl: faker.image.cats() + '?' + req.body.username
        },
        message: req.body.message
      });
});

router.get('/reset', function(req, res) {
  chatLogs = [];
  res.send("OK");
});


module.exports = router;
