var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")
var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy
var bcrypt = require('bcryptjs')
var mongoose = require('mongoose')
var User = require('./schema/UserSchema.js')
require('dotenv').config()


// connect to mongoDb
const mongoDb = process.env.DB_URI
mongoose.connect(mongoDb, {useUnifiedTopology: true, useNewUrlParser: true})
const db = mongoose.connection
db.on("error", console.error.bind(console, "mongo connection error:"))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signUpRouter = require('./routes/sign-up');
var logInRouter = require('./routes/log-in')
var logOutRouter = require('./routes/log-out')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: "cats", resave: false, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

// set up passport authentication
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({username: username}, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, {message: "Username not found"})
      }
      bcrypt.compare(password, user.password, (err, res) => {
        console.log('hashed:', user.password)
        console.log('unhashed: ', password)
        console.log('result: ', res)
        if (!res) {
          console.log('fail')
          return done(null, false, {message: "incorrect password"})
        } else {
          console.log('sucess')
          return done(null, user)
        }
      })
    })
  })
)

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    done(err, user)
  })
})

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  })
)

// set local object currentUser
app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

// render views
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sign-up', signUpRouter);
app.use('/log-in', logInRouter);
app.use('/log-out',logOutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: "404"});
});

app.listen(3000)

module.exports = app;
