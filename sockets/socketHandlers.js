let onlineUsers = {}

const handleConnection = (io) => (socket) => {
  const userId = socket.user.id // JWT contains user ID
  onlineUsers[userId] = socket.id

  socket.broadcast.emit("userConnected", userId)

  socket.on("chatMessage", (msg) => {
    io.emit("message", { userId, msg })
  })

  socket.on("disconnect", () => {
    delete onlineUsers[userId]
    io.emit("userDisconnected", userId)
  })
}

module.exports = { handleConnection }
