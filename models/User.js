const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: String,
})

module.exports = mongoose.model("User", userSchema)
