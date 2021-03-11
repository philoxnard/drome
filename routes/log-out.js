var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../schema/UserSchema.js')

/* GET log out page. */
router.get('/', function(req, res, next) {
    console.log('found')
    req.logout()
    res.redirect('/')
});

module.exports = router;