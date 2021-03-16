var mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = mongoose.model(
    "User",
    new Schema({
      username: {type: String, required: true},
      password: {type: String, required: true},
      isAdmin: {type: Boolean, required: true},
      firstName: {type: String},
      lastName: {type: String},
      shoeSize: {type: Number}
    })
  )

  module.exports = User