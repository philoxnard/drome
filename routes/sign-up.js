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
    console.log('unhashed: ', req.body.password)
    console.log('hashed:', hashedPassword)
    const user = new User({
      username: req.body.username, 
      password: hashedPassword
    }).save(err => {
      if (err) {
        return next(err)
      }
    })
    console.log(bcrypt.compare(req.body.password, hashedPassword))
  })
  res.redirect('/')
})

module.exports = router;