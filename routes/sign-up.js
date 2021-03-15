var express = require('express');
var bcrypt = require('bcryptjs')
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../schema/UserSchema.js')

/* GET sign up page. */
router.get('/', function(req, res, next) {
  res.render('sign-up-form', { title: 'Sign Up' });
});

router.post('/', function(req, res, next){
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) =>{
    const user = new User({
      username: req.body.username, 
      password: hashedPassword,
      isAdmin: false
    }).save(err => {
      if (err) {
        return next(err)
      }
    })
  })
  res.redirect('/')
})

module.exports = router;