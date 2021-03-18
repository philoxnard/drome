var express = require('express');
var router = express.Router();

var Game = require('../schema/GameSchema.js')



/* GET home page. */
router.get('/', async function(req, res, next) {
    res.locals.bookingGame = true
    res.render('book-game', { title: 'Book your Game'});
});

router.post('/', function(req, res, next){
        const game = new Game({
        organizerName: req.body.organizerName, 
        dateBooked: new Date(),
        dateGame: req.body.date,
        timeGame: req.body.time,
        numPlayers: req.body.numPlayers,
        numPlayersRentingShoes: req.body.numPlayersRentingShoes,
        numGames: req.body.numGames
    }).save(err => {
    if (err) {
        return next(err)
    }
    })
    res.redirect('/')
  })
  

module.exports = router;
