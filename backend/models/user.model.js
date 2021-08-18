const mongoose = require('mongoose')

// create a schema for a user to be added to our mongoDB database.
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    unique: true,
  }
}, {
  timestamps: true,
})

// create model off the schema
const User = mongoose.model('User', userSchema)
module.exports = User;