var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var BlogPost = require('../schema/BlogPostSchema.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin'});
});

/* GET home page. */
router.get('/new-post', function(req, res, next) {
  res.render('new-post', { title: 'Admin'});
});

router.post('/new-post', function(req, res, next){
  console.log('found')
  const blogPost = new BlogPost({
    title: req.body.title, 
    date: new Date(),
    content: req.body.content
  }).save(err => {
    if (err) {
      return next(err)
    }
  })
  res.redirect('/')
})


module.exports = router;
