const jwt = require("jsonwebtoken")

function generateToken(user) {
  // For testing, we are hardcoding user data
  const userData = {
    id: user.id,
    username: user.username,
  }

  return jwt.sign(userData, process.env.JWT_SECRET)
}

module.exports = {
  generateToken,
}
