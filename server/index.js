const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const router = require("./router");

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log(socket);

  socket.on("disconnect", () => {
    console.log("user left!!!!!!!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has Started on ${PORT}`));
