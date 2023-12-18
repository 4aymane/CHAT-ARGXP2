const { generateToken } = require("../utils/tokenUtils")

const generateTestToken = (req, res) => {
  // Hardcoded user data for token generation
  const user = { id: 1, username: "testuser" }
  const token = generateToken(user)

  res.json({ token })
}

module.exports = {
  generateTestToken,
}
