var express = require('express');
var router = express.Router();

/* GET log in page. */
router.get('/', function(req, res, next) {
  res.render('log-in-form', { title: 'Log In' });
});

module.exports = router;