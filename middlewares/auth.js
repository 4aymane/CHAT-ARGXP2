const jwt = require("jsonwebtoken")

function authenticateSocket(socket, next) {
  const token = socket.handshake.query.token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(new Error("Authentication error"))
    }
    socket.user = user
    next()
  })
}

module.exports = {
  authenticateSocket,
}
