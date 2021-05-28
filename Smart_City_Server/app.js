const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});


app.get('/', (req, res) => {
  res.send({'Test Temperatuur': 21.7})
});

io.on('connection', (socket) => {
  console.log(`a user connected`);
  io.emit('confirm_connection');

  socket.on('REQUEST_GIVE_WATER', (msg) => {
    io.emit('RBP_GIVE_WATER')
  });
});



server.listen(4000, () => {
  console.log('listening on *:4000');
});