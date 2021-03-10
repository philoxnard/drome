var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET birthdays page. */
router.get('/birthdays', function(req, res, next) {
  res.render('index', { title: 'Birthdays' });
});

/* GET arcade page. */
router.get('/arcade', function(req, res, next) {
  res.render('index', { title: 'Arcade' });
});

/* GET bowling leagues page. */
router.get('/leagues', function(req, res, next) {
  res.render('index', { title: 'Leagues' });
});

/* GET company events page. */
router.get('/events', function(req, res, next) {
  res.render('index', { title: 'Events' });
});

/* GET faq page. */
router.get('/faq', function(req, res, next) {
  res.render('index', { title: 'FAQ' });
});

module.exports = router;
