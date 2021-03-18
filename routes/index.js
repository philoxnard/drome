var express = require('express');
var router = express.Router();

var BlogPost = require('../schema/BlogPostSchema.js')


/* GET home page. */
/* Takes the blogposts from database and displays the first three */
router.get('/', async function(req, res, next) {
  var posts = await BlogPost.find({})
  posts = posts.reverse()
  posts = posts.slice(0, 3)
  res.render('home', { title: 'Home', posts});
});

router.get('/all-posts', async function(req, res, next) {
  var posts = await BlogPost.find({})
  posts = posts.reverse()
  res.render('home', { title: 'Home', posts});
});

router.post('/', function(req, res, next){
  let blogPostID = req.body.ID
  BlogPost.findByIdAndDelete(blogPostID, function(err, docs){
    if (err){
      console.log(err)
    } else{
      console.log("Deleted: ", docs)
    }
  })
  res.redirect('/')
})

router.post('/all-posts', function(req, res, next){
  let blogPostID = req.body.ID
  BlogPost.findByIdAndDelete(blogPostID, function(err, docs){
    if (err){
      console.log(err)
    } else{
      console.log("Deleted: ", docs)
    }
  })
  res.redirect('/all-posts')
})

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
