var mongoose = require("mongoose")
const Schema = mongoose.Schema

const Game = mongoose.model(
    "Game",
    new Schema({
      organizerName: {type: String, required: true},
      organizerUsername: {type: String},
      dateBooked: {type: Date, required: true},
      dateGame: {type: Date, required: true},
      timeGame: {type: String, required: true},
      numPlayers: {type: Number, required: true},
      numPlayersRentingShoes: {type: Number, required: true},
      numGames: {type: Number, required: true}
    })
  )

  module.exports = Game