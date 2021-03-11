var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../schema/UserSchema.js')

/* GET sign up page. */
router.get('/', function(req, res, next) {
  res.render('sign-up-form', { title: 'Home' });
});

router.post('/', function(req, res, next){
  console.log("found")
    const user = new User({
      username: req.body.username, 
      password: req.body.password
    }).save(err => {
      if (err) {
        return next(err)
      }
    })
  res.redirect('/')
})

module.exports = router;