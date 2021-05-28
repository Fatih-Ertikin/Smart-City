const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const raspberryPi = require("./constants/raspberryPi");
const reactClient = require("./constants/reactClient");

app.get("/", (req, res) => {
  res.send({ "Test Temperatuur": 21.7 });
});

io.on("connection", (socket) => {
  console.log(`a user connected`);
  io.emit("confirm_connection");

  // React asks for temperature
  socket.on(reactClient.READ_TEMPERATURE, (data, callback) => {
    console.log(data);
    // Server (we) ask raspberry for temperature
    socket.emit(raspberryPi.REQ_GET_TEMP, (result) => {
      console.log(result);
    });
    // We return temperature
    callback('test');
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});
