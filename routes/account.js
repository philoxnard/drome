var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('account', { title: 'Account'});
});

router.get('/update-account', function(req, res, next) {
  res.render('update-account', { title: 'Account'});
});

// router.post('/update-account', function(req, res, next){
//   get the form info and send it to mongo!
// })

module.exports = router;
