var express = require('express');
var router = express.Router();
const date = new Date;

const messages = [
  {
    text: 'Hi there!',
    user: "Amando",
    added: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    }),
  
  },
  {
    text: "hello World",
    user: "Charles",
    added: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    }),
  
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
    added: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    }),
  
  });
  res.redirect('/')
})

module.exports = router;
