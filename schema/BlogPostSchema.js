var mongoose = require("mongoose")
const Schema = mongoose.Schema

const BlogPost = mongoose.model(
    "BlogPost",
    new Schema({
      title: {type: String, required: true},
      date: {type: Date, required: true},
      content: {type: String, required: true}
    })
  )

  module.exports = BlogPost