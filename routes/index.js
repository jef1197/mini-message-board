var express = require('express');
var router = express.Router();
const messages = [
  {
    text: 'Hi there!',
    user: "Amando",
    added: new Date()
  },
  {
    text: "hello World",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.nameText,
    added: new Date()
  });
  res.redirect('/')
})

module.exports = router;
