var express = require('express');
var router = express.Router();

var User = require('../schema/UserSchema.js')
var Game = require('../schema/GameSchema.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('account', { title: 'Account'});
});

router.get('/update-account', function(req, res, next) {
  res.render('update-account', { title: 'Account'});
});

router.post('/update-account', function(req, res, next){
  const user = res.locals.currentUser
  user.firstName = req.body.firstName
  user.lastName = req.body.lastName
  user.shoeSize = req.body.shoeSize
  user.save()
  res.redirect('/')
})


module.exports = router;
