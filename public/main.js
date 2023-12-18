const socket = io.connect("http://localhost:3000", {
  query: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTcwMjg3NzEyMH0.CaVf8nb4feBXzHUNZ5Jtls1HzdYP5kL5v3fy7V-ESIE",
  },
})

socket.on("message", (data) => {
  document.getElementById("messages").innerHTML +=
    "<p><strong>" + data.userId + ":</strong> " + data.msg + "</p>"
})

function sendMessage() {
  const messageInput = document.getElementById("chatInput")
  const message = messageInput.value
  socket.emit("chatMessage", message)

  // Empty the input field after sending the message
  messageInput.value = ""
}
