const express = require("express")
const http = require("http")
require("dotenv").config()
const { connectDB } = require("./config/database")
const app = express()
const server = http.createServer(app)
const socketIo = require("socket.io")
const io = socketIo(server)
const { authenticateSocket } = require("./middlewares/auth")
const { handleConnection } = require("./sockets/socketHandlers")
const { generateTestToken } = require("./controllers/tokenController")

connectDB()

io.use(authenticateSocket)
app.use(express.static("public"))

io.on("connection", handleConnection(io))

app.get("/generate-token", generateTestToken)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
